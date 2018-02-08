//objetos dialogModal para el izimodal
    function DialogoModal(divId, titulo, accionOK, data) {
        this.divId = divId;
        this.titulo = titulo;
        this.accionOK = accionOK;
        this.data = data;
    };
    DialogoModal.prototype.show = function () {
        var that = this;
        $("#" + this.divId).iziModal({
            title: this.titulo
        });

        $("#" + this.divId).find(".btn-success").on(
            "click",
            function () {

                $("#" + that.divId).iziModal('close');
                that.accionOK();
            }
        );
        $("#"+this.divId).fullCalendar( 'render' );

        $("#"+this.divId).iziModal('open');
    }
