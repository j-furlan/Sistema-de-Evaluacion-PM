//var UrlApi = "http://localhost:64315/API/";
var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";


function AgregarEscalasDeCalificacion() {
    var settings = {
        "url": UrlApi + "AgregarEscalasDeCalificacion",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            "TxtEscalaDeCalificacion": $("#TxtEscalaDeCalificacion").val(),
            "DblPunteo": $("#DblPunteo").val(),
            "TxtDescripcion": $("#TxtDescripcion").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'La Escala De Calificacion se agregó correctamente.');
                LimpiarFormulario();
                ObtenerEscalasDeCalificaciones();
                $('#AgregarEscalasDeCalificacionModal').modal('hide');
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo agregar la Escala De Calificacion');
            }
        });

    });
}

function LimpiarFormulario() {
    $("#IdOculto").val("");
    $("#TxtEscalaDeCalificacion").val("");
    $("#DblPunteo").val("");
    $("#TxtDescripcion").val("");
}

function ObtenerEscalasDeCalificaciones() {
    $(".DatosEscalasDeCalificaciones td").remove();

    var settings = {
        "url": UrlApi + "ObtenerEscalasDeCalificaciones",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "TxtToken": sessionStorage.getItem('token')
        }),
    };
    $.ajax(settings).done(function(response) {

        LimpiarFormulario();

        $.each(response, function(index, data) {
            sessionStorage.setItem('EscalasDeCalificacion', response.length);
            console.log(sessionStorage.getItem('EscalasDeCalificacion'));
            var fila = "<tr> <td>" + index +
                "</td><td>" + data.TxtEscalaDeCalificacion +
                "</td><td>" + data.DblPunteo +
                "</td><td>" + data.TxtDescripcion +
                "</td><td>" + data.FechaIngreso +
                "<td class='text-center'><a href='#' id='EditarEscalasDeCalificacion' onclick='ObtenerDatosEscalasDeCalificacion(" + data.IdEscalaDeCalificacion + ");'><i class='fas fa-user-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdEscalaDeCalificacion + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a> </tr>";

            $(fila).appendTo(".DatosEscalasDeCalificaciones");
        });
    });
}

function EliminarEscalasDeCalificacion(IdEscalaDeCalificacion) {
    var settings = {
        "url": UrlApi + "EliminarEscalaDeCalificacion",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEscalaDeCalificacion": IdEscalaDeCalificacion,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'La Escala De Calificacion se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerEscalasDeCalificaciones();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar la Escala De Calificacion');
            }
        });
    });
}

function ObtenerDatosEscalasDeCalificacion(IdEscalaDeCalificacion) {
    var settings = {
        "url": UrlApi + "ObtenerDatosEscalaDeCalificacion",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEscalaDeCalificacion": IdEscalaDeCalificacion,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        //mostra modal para editar especialidad
        $('#AgregarEscalaDeCalificacionModal').modal('show');
        LimpiarFormulario();
        $("#IdOculto").val(IdEscalaDeCalificacion);

        $.each(response, function(index, data) {

            $("#TxtEscalaDeCalificacion").val(data.TxtEscalaDeCalificacion);
            $("#DblPunteo").val(data.DblPunteo);
            $("#TxtDescripcion").val(data.TxtDescripcion);

        });
    });
}

function ActualizarEscalasDeCalificacion() {
    var settings = {
        "url": UrlApi + "ActualizarEscalasDeCalificacion",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEscalaDeCalificacion": $("#IdOculto").val(),
            "TxtEscalaDeCalificacion": $("#TxtEscalaDeCalificacion").val(),
            "DblPunteo": $("#DblPunteo").val(),
            "TxtDescripcion": $("#TxtDescripcion").val(),
            "TxtToken": sessionStorage.getItem('token')

        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'La Escala De Calificacion se modificó correctamente.');
                $('#AgregarEscalasDeCalificacionModal').modal('hide');
                LimpiarFormulario();
                ObtenerEscalasDeCalificaciones();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar la Escala De Calificacion');

            }
        });
    });

}

function Guardar() {
    if ($("#IdOculto").val() == "Eliminar") {
        EliminarEscalaDeCalificacion(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarEscalasDeCalificacion();
    } else {
        AgregarEscalasDeCalificacion();
    }
}

function Eliminar(IdEscalaDeCalificacion) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdEscalaDeCalificacion;
}
