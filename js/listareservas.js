
//objeto para la creaciond e la tabla 

function ListaReserva(paginas){

    this.paginas = paginas;
    this.pagina = 0;
    this.fecha=moment(new Date());

    var me = this;

    $(document).on("click","#retrocederFecha",function(){
        
        me.retrocederPagina();
    });

    $(document).on("click","#avanzaFecha",function(){
        
        me.avanzarPagina();
    });

}

ListaReserva.prototype.avanzarPagina = function (){

    
    this.pagina = this.pagina + 1;
    if(this.pagina>3){
        this.pagina = Math.floor((Math.random() * 6) + 1);        
    }
    this.fecha= moment(this.fecha).add(1, 'days');
    this.montarReservas();

}

ListaReserva.prototype.retrocederPagina = function (){
    
    
    this.pagina = this.pagina - 1;
    if(this.pagina <0){        
        this.pagina = Math.floor((Math.random() * 6) + 1);
    }
    console.log(this.pagina);
    this.fecha= moment(this.fecha).subtract(1, 'days');
    this.montarReservas();

}


ListaReserva.prototype.montarReservas = function(){

    $("#cuerpoTabOrd").html(this.montarTablaOrdenadores(this.paginas[this.pagina])+this.montarPaginador());
}


ListaReserva.prototype.montarPaginador = function(fecha){               
    var textoBotones= 
        "<tr>"+
            "<td colspan='5'>"+
                "<button id='retrocederFecha' class='btn btn-success btn-lg fa fa-arrow-left'>"+
                "</button>"+ this.fecha.format('DD/MM/YYYY')+
                "<button id='avanzaFecha' class='btn btn-success btn-lg  fa fa-arrow-right'></button>"
            "</td>"+
        "</tr>";

    return textoBotones;

}

ListaReserva.prototype.montarTablaOrdenadores = function(pagina) {        
    var texto ="";
    for(var indice in pagina) {
        var fila = pagina[indice];
        texto = texto + 
          '<tr class="rowSelect '+(fila.mantenimiento==='MANTENIMIENTO'?'red':'')+ '">' +            
              "<td>" + 
                 fila.id+
              "</td>"+

              "<td>"+
              fila.equipo+
              "</td>"+            
              "<td>"+
              fila.mantenimiento+
              "</td>"+
                   "<td>"+
              fila.estado+
              "</td>"+
                   "<td>"+
              fila.tiempoUso+
              "</td>"+            
         "</tr>";             
    }
    return texto;


}