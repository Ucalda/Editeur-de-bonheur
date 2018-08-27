
      // get canvas avec  id c
      var c = document.getElementById("c");
      var ctx = c.getContext("2d");

      //mettre canvas en full screen
      c.height = window.innerHeight;
      c.width = window.innerWidth;

      //charracter envoyé dans la matrice
      var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
      //converting the string into an array of single characters
      matrix = matrix.split("");

      var font_size = 10;
      var columns = c.width / font_size; //nombres de colones de la chute
      var drops = [];
      for(var x = 0; x < columns; x++)
          drops[x] = 1;

      function draw()
      {
          //background noir
          //background translucide
          ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
          ctx.fillRect(0, 0, c.width, c.height);

          ctx.fillStyle = "#0F0"; //couleur text
          ctx.font = font_size + "px arial";
          for( var i = 0; i < drops.length; i++ )
          {
              var text = matrix[ Math.floor( Math.random() * matrix.length ) ];
              //x = i*font_size, y = value of drops[i]*font_size
              ctx.fillText(text, i * font_size, drops[i] * font_size);


              if( drops[i] * font_size > c.height && Math.random() > 0.975 )
                  drops[i] = 0;

              
              drops[i]++;
          }
      }

      setInterval( draw, 35 );
