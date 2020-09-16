myNotification = {

    showNotification: function(icon, type, title, message) {

        $.notify({
            icon: icon, //parametro icono
            title: "<span style='color:black; '><b>" + title + "</b>", //parametro title
            message: message + "</span>" //mensaje 

        }, {
            type: type,
            timer: 8000, //tiempo que se mostrara
            //showProgressbar: true, //si queres que indique progreso descomenta esta linea
            animate: {
                enter: 'animate__animated animate__bounce', //animacion al ingresar
                exit: 'animate__animated fadeOutUp'
            },
            placement: {
                from: "top", //alinieado arriba
                align: "center" //alineado al centro
            }
        });
    }

};