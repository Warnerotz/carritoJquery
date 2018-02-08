
$(document).ready(function () {
    
    var arrayComidas = [tablaOrdMesa, tablaOrdCom]
    var arrayPaginas =[pagina1,pagina2,pagina3,pagina4,pagina5,pagina6,pagina7];
    var reservas = new ListaReserva(arrayPaginas);
    var fila;
  
    $("#btnComida").on("click", function () {

        $("#comida").show();
        $("#pedidos").hide();
        $("#reservas").hide();
        $("#ordenadores").hide()
    });

    $("#btnPedidos").on("click", function () {

        $("#pedidos").show();
        $("#comida").hide();
        $("#reservas").hide();
        $("#ordenadores").hide()
    });

    $("#btnReservas").on("click", function () {

        $("#comida").hide();
        $("#pedidos").hide();
        $("#reservas").show();
        $("#ordenadores").hide();
        $('.calendar').fullCalendar('render');

    });
    $("#btnOrdenadores").on("click", function () {

        $("#comida").hide();
        $("#pedidos").hide();
        $("#reservas").hide();
        
        reservas.montarReservas();
          
        
        $("#ordenadores").show();
    });


    //poner verde o no el boton preparado   
    $(document).on("click", ".preparado", function(){
        
        if ($(this).hasClass('btn-success')) {
            console.log("entro if");
            $(this).removeClass('btn-success');
        } else {
            $(this).addClass('btn-success');
        }
        
    });

    $(".ordMesa").on("click", function(){         
        var texto ="";
        var contador = 1;
        var ordComida = arrayComidas[0];
        for(var indice in ordComida){
            var fila = ordComida[indice];
            var id="f"+contador;
            texto = texto+
                '<tr class="display-4" id="'+id+'">'+
                "<td class='align-middle'>"+fila.comida+
                "</td>"+
                "<td class='align-middle'>"+fila.observacion+
                "</td>"+
                "<td class='align-middle'>"+fila.mesa+
                "</td>"+                
                "<td>"+
            "<button type='button' class='preparado btn btn-block'>Preparado</button>"+
            '<button type="button" class="listo btn btn-block" data-fila="'+id+'"'+
            ">Listo</button></td>"+
            "</tr>"
            
            
            contador++;
            
        }
        $("#tbodyComida").html(texto);
        
        
    });
    $(".ordCom").on("click", function(){         
        var texto ="";
        var contador = 1;
        var ordCom = arrayComidas[1];
        for(var indice in ordCom){
            var fila = ordCom[indice];
            var id="f"+contador;
            texto += 
                '<tr class="display-4" id="'+id+'">'+
                "<td class='align-middle'>"+fila.comida+
                "</td>"+
                "<td class='align-middle'>"+fila.observacion+
                "</td>"+
                "<td class='align-middle'>"+fila.mesa+
                "</td>"+                
                "<td>"+
            "<button type='button' class='preparado btn btn-block'>Preparado</button>"+
            '<button type="button" class="listo btn btn-block" data-fila="'+id+'"'+
            ">Listo</button></td>"+
            "</tr>"
            
            
            contador++;
            
        }
        $("#tbodyComida").html(texto);
        
        
    });

    //borrar linea cuando se le de a listo
    $(document).on("click", ".listo", function(){
        
        var fila = $(this).data("fila");

        var dialogo = new DialogoModal(
            "modalPago",
            "Confirmar",
            function () {
                $("#" + fila).remove();

            }
        )
        dialogo.show();
        
    });

    //eliminar tabla bebidas cuando le dan a la X
    $(".cruz").on("click", function () {
        $(this).closest('table').remove();

    });

    //eliminar tabla comida cuando le dan a pagar
    $(".pagar").on("click", function () {
        var fila = $(this).data("tabla");
        console.log(fila);
        var dialogo = new DialogoModal(
            "modalPago",
            "Confirmar",
            function () {

                $('#' + fila).remove();

            }
        )
        dialogo.show();


    });
    
    $(document).on("click",'.rowSelect',function(){
        var dialogoMant = new DialogoModal(
            "modalMantenimineto",
            "Listado",
            function(){}
        
        )
        dialogoMant.show();
        
        
    });

    $('.calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,agendaDay'
        },
        defaultDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                color: 'red',
                title: 'ordenador',
                start: '2018-01-23T12:30:00',
                end: '2018-01-23T14:30:00'
        },
            {   
                color: 'aquamarine',
                title: 'ps4',
                start: '2018-01-23T12:30:00',
                end: '2018-01-23T14:30:00'
        },

            {

                title: 'ps4',
                start: '2018-01-23T16:00:00'
        },
            {
                title: 'Conference',
                start: '2018-01-11',
                end: '2018-01-13'
        },
            {
                title: 'Meeting',
                start: '2018-01-12T10:30:00',
                end: '2018-01-12T12:30:00'
        },
            {
                title: 'Lunch',
                start: '2018-01-12T12:00:00'
        },
            {
                title: 'Meeting',
                start: '2018-01-12T14:30:00'
        },
            {
                title: 'Happy Hour',
                start: '2018-01-12T17:30:00'
        },
            {
                title: 'Dinner',
                start: '2018-01-12T20:00:00'
        },
            {
                title: 'Birthday Party',
                start: '2018-01-13T07:00:00'
        },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-01-28'
        }
      ]
    });




 
    
    

});
