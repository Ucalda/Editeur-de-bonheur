  
//   DEFINITION DES VARIABLES DE LA PALETTE DE COULEURS
  var colorPalette = ['FFBF1E', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'];
  var forePalette = $('.fore-palette');
  var backPalette = $('.back-palette');

  for (var i = 0; i < colorPalette.length; i++) {
    forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
    backPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
  }


//   FONCTION PROPRIETES DU TEXTE
  $('.toolbar a').click(function(e) {
    var command = $(this).data('command');
    if (command == 'h1' || command == 'h2' || command == 'p') {
      document.execCommand('formatBlock', false, command);
    }
    if (command == 'forecolor' || command == 'backcolor') {
      document.execCommand($(this).data('command'), false, $(this).data('value'));
    }
    if (command == 'createlink' || command == 'insertimage') {
      url = prompt('Entrer le lien ici: ', 'http:\/\/');
      document.execCommand($(this).data('command'), false, url);
    } else document.execCommand($(this).data('command'), false, null);
  });

//   BOUCLE CHOIX SMILEYS

  for (var j=1; j<4; j++){
    $('.selectSmiley').append("<img src='smiley/"+ j +".gif' class='smileys' />")
}

$('.fa-smile').on('click', function () {
    $('.selectSmiley').toggle('slow');
})

$('.smileys').on('click', function () {
    document.execCommand('insertImage', false, this.src);
    $('.selectSmiley').hide('slow');
})