var x = $(document);
x.ready(start);

function start() {
    var personaje = $('.pj');
    posicionPj = personaje.offset();
    // console.log(posicionPj.left);
    var pos_left = posicionPj.left;
    var pos_top = posicionPj.top;
    $(document).keydown(function (keyPressed) {
        if (keyPressed.keyCode === 68) {
            pos_left = pos_left + 9;

            personaje.css("left", pos_left);



        }


        if (keyPressed.keyCode === 65) {
            pos_left = pos_left - 9;

            personaje.css("left", pos_left);



        }

        if (keyPressed.keyCode === 83) {
            pos_top = pos_top + 9;

            personaje.css("top", pos_top);



        }

        if (keyPressed.keyCode === 87) {
            pos_top = pos_top - 9;

            personaje.css("top", pos_top);



        }
    })
    //fin movimiento
    $(document).click(posicion_puntero);

    function posicion_puntero(e) {
        // $('.pj').offset();
        var pos_click_x = e.pageX;
        var pos_click_y = e.pageY;
        console.log("Posicion X:" + pos_click_x)
        console.log("Posicion Y:" + pos_click_y)
        $('body').append("<div class='Proyectil'></div>")
        $('.Proyectil').css("left", pos_left);
        $('.Proyectil').css("top", pos_top);
        //console.log($(pos_top));
        var pos_proyectil = $('.Proyectil').offset();
        var posicionamiento_x = pos_proyectil.left - pos_click_x;
        var posicionamiento_y = pos_proyectil.top - pos_click_y;
        // console.log(pos_proyectil.left);
        var is_y_negative;
        var is_x_negative;
        if (posicionamiento_y < 0) {
            //   posicionamiento * -1;
            var posicionamiento_y_processed = -posicionamiento_y;
            is_y_negative = true;
        } else {
            var posicionamiento_y_processed = posicionamiento_y;
            is_y_negative = false;
        }
        if (posicionamiento_x < 0) {
            //   posicionamiento * -1;
            var posicionamiento_x_processed = -posicionamiento_x;
            is_x_negative = true;
        } else {
            var posicionamiento_x_processed = posicionamiento_x;
            is_x_negative = false;
        }


        var proyectil_posicion_x = pos_proyectil.left;
        var proyectil_posicion_y = pos_proyectil.top;
        //console.log("Diferencia:" + -posicionamiento_x + " Is " + is_negative ); 

        for (var i = 0; i < posicionamiento_x_processed; i++) {

            setTimeout(movimientox, 500);





        }
        for (var j = 0; j < posicionamiento_y_processed; j++) {

            setTimeout(movimientoy, 500);
        }

        i = 0;
        j = 0;

        function movimientox() {
            if (is_x_negative) {
                proyectil_posicion_x = proyectil_posicion_x + 1;
            } else {
                proyectil_posicion_x = proyectil_posicion_x - 1;
            }

            // console.log(proyectil_posicion);

            $('.Proyectil').css('left', proyectil_posicion_x);

        }

        function movimientoy() {
            if (is_y_negative) {
                proyectil_posicion_y = proyectil_posicion_y + 1;
            } else {
                proyectil_posicion_y = proyectil_posicion_y - 1;
            }
            //   proyectil_posicion_y = proyectil_posicion_y + 1;
            // console.log(proyectil_posicion);

            $('.Proyectil').css('top', proyectil_posicion_y);

        }
        setTimeout(destructor, 1000);

        function destructor() {
            $('.Proyectil').remove();

        }
    }

}