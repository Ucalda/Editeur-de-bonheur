
// Font Style
$("button").on("click", function(e) {
	var $this = $(this),
			action = $this.data("action");

	var aShowDefaultUI = false,
			aValueArgument = null;
	if ($this.data("show-default-ui"))
		aShowDefaultUI = $this.data("show-default-ui");

	if ($this.data("value-args")) aValueArgument = $this.data("value-args");

	if ($this.data("action") == "createLink")
		aValueArgument = prompt(
			"Please specify URL (including http protocol)",
			"http://www."
		);

	if ($this.data("action") == "insertImage")
		aValueArgument = prompt(
			"Please specify Image URL (including http protocol)",
			"http://www."
        );
        
        if($this.data("action") == "changeColor")
            aValueArgument = $("#changeColor").value;

	document.execCommand(action, aShowDefaultUI, aValueArgument);
});

// Change font color
var colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'];
var forePalette = $('.fore-palette');
var backPalette = $('.back-palette');

for (var i = 0; i < colorPalette.length; i++) {
  forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
  backPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
}

// Font Formatting Selects
$("select").on("change", function() {
	var $this = $(this),
			action = $this.data("action"),
			aValueArgument = $this.val(),
			aShowDefaultUI = false;

	if ($this.data("show-default-ui"))
		aShowDefaultUI = $this.data("show-default-ui");

	document.execCommand(action, aShowDefaultUI, aValueArgument);
});

// Image handling
$("img").on("click", function() {
	var $this = $(this);
	$this.toggleClass("right");
});