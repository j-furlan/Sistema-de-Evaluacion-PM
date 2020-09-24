var UrlApi = "http://localhost:64315/API/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";

function AgregarEspecialidad() {
    var settings = {
        "url": UrlApi + "AgregarEspecialidad",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "TxtEspecialidad": $("#TxtEspecialidad").val(),
            "TxtToken": sessionStorage.getItem('token'),
        }),
    };

    $.ajax(settings).done(function(response) {

        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'La especialidad se agregó correctamente.');
                LimpiarFormulario();
                ObtenerEspecialidades();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo agregar la especialidad');
            }
        });
    });
}

function LimpiarFormulario() {
    $("#TxtEspecialidad").val("");
}

function ObtenerEspecialidades() {
    $(".DatosEspecialidades td").remove();

    var settings = {
        "url": UrlApi + "ObtenerEspecialidades",
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
            var fila = "<tr> <td>" + data.IdEspecialidad +
                "</td><td>" + data.TxtEspecialidad + "</td>" +
                "<td class='text-center'><a href='#' id='EditarEspecialidad' onclick='ObtenerDatosEspecialidad(" + data.IdEspecialidad + ");'><i class='fas fa-user-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdEspecialidad + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a> </tr>";

            $(fila).appendTo(".DatosEspecialidades");
        });
    });
}

function EliminarEspecialidad(IdEspecialidad) {
    var settings = {
        "url": UrlApi + "EliminarEspecialidad",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEspecialidad": IdEspecialidad,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {

                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'La especialidad se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerEspecialidades();

            } else {

                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar la especialidad.');

            }
        });
    });
}

function ObtenerDatosEspecialidad(IdEspecialidad) {
    var settings = {
        "url": UrlApi + "ObtenerDatosEspecialidad",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEspecialidad": IdEspecialidad,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        //mostra modal para editar especialidad
        $('#AgregarEspecialidadModal').modal('show');
        LimpiarFormulario();
        $("#IdOculto").val(IdEspecialidad);

        $.each(response, function(index, data) {
            $("#TxtEspecialidad").val(data.TxtEspecialidad);

        });
    });
}

function ActualizarEspecialidad() {
    var settings = {
        "url": UrlApi + "ActualizarEspecialidad",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEspecialidad": $("#IdOculto").val(),
            "TxtEspecialidad": $("#TxtEspecialidad").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {

                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'La especialidad se modificó correctamente.');
                LimpiarFormulario();
                ObtenerEspecialidades();

            } else {

                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar la especialidad');

            }
        });
    });

}

function Guardar() {

    if ($("#IdOculto").val() == "Eliminar") {
        EliminarEspecialidad(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarEspecialidad();
    } else {
        AgregarEspecialidad();
    }
}

function Eliminar(IdEspecialidad) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdEspecialidad;
}