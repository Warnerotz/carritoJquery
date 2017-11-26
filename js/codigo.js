window.onload = function () {



    document.getElementById('validar').addEventListener("click", validar, false);



    function validar() {
        validarRadio();
        validarUnCheck();
        validarCheckMultiple();
        if (!validarRadio() || !validarUnCheck() || !validarCheckMultiple()) {
            event.preventDefault();

        }
    }

    function validarRadio() {
        var radio = document.getElementsByName('genero');
        var ischecked = false;
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {

                ischecked = true;
            }

        }


        if (!ischecked) {
            document.getElementById('errorRadio').innerHTML = "Selecciona un genero";
            return false;

        } else {
            return true;

        }

    }

    function validarUnCheck() {
        var check = document.getElementsByName('checkUno');
        var suma = 0;

        for (var i = 0; i < check.length; i++) {
            if (check[i].checked) {
                suma++;

            }



        }


        if (suma == 0 || suma > 1) {
            document.getElementById('errorUnCheck').innerHTML = "Selecciona una opcion";
            return false;
        } else {
            return true;
        }


    }

    function validarCheckMultiple() {
        var cantidad = 3;
        var checkMul = document.getElementsByName('checkMultiple');
        var sumMult = 0;

        for (var i = 0; i < checkMul.length; i++) {
            if (checkMul[i].checked) {
                sumMult++;

            }
        }
        
        if (sumMult < 3 || sumMult >3) {
            document.getElementById('errorcheckMult').innerHTML = "Selecciona 3 opciones";
            return false;
        } else {
            return true;
        }

    }

};
