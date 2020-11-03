var UrlApi = "http://localhost:64315/API/";
//var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";

function AgregarTipoDeEvaluacion() {
    var settings = {
        "url": UrlApi + "AgregarTipoDeEvaluacion",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            "TxtTipoDeEvaluacion": $("#TxtTipoDeEvaluacion").val(),
            "TxtDescripcion": $("#TxtDescripcion").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El tipo de evaluacion se agregó correctamente.');
                LimpiarFormulario();
                ObtenerTiposDeEvaluacion();
                $('#AgregarTipoDeEvaluacionModal').modal('hide');
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo agregar el tipo de evaluacion.');
            }
        });

    });
}

function LimpiarFormulario() {
    $("#IdOculto").val("");
    $("#TxtTipoDeEvaluacion").val("");
    $("#TxtDescripcion").val("");
}

function ObtenerTiposDeEvaluacion() {
    $(".DatosTiposDeEvaluacion td").remove();

    var settings = {
        "url": UrlApi + "ObtenerTiposDeEvaluaciones",
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
            sessionStorage.setItem('TiposDeEvaluacion', response.length);
            console.log(sessionStorage.getItem('TiposDeEvaluacion'));
            var fila = "<tr> <td>" + data.IdTipoDeEvaluacion +
                "</td><td>" + data.TxtTipoDeEvaluacion +
                "</td><td>" + data.TxtDescripcion +
                "</td><td>" + (data.FechaIngreso).substring(0,10) +
                "<td class='text-center'><a href='#' id='EditarTipoDeEvaluacion' onclick='ObtenerDatosTipoDeEvaluacion(" + data.IdTipoDeEvaluacion + ");'><i class='fas fa-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdTipoDeEvaluacion + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-trash-alt text-danger'></i></a> </tr>";

            $(fila).appendTo(".DatosTiposDeEvaluacion");
        });
    });
}

function EliminarTipoDeEvaluacion(IdTipoDeEvaluacion) {
    var settings = {
        "url": UrlApi + "EliminarTipoDeEvaluacion",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdTipoDeEvaluacion": IdTipoDeEvaluacion,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El tipo de evaluacion se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerTiposDeEvaluacion();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el tipo de evaluacion.');
            }
        });
    });
}

function ObtenerDatosTipoDeEvaluacion(IdTipoDeEvaluacion) {
    var settings = {
        "url": UrlApi + "ObtenerDatosTipoDeEvaluacion",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdTipoDeEvaluacion": IdTipoDeEvaluacion,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        //mostra modal para editar especialidad
        $('#AgregarTipoDeEvaluacionModal').modal('show');
        LimpiarFormulario();
        $("#IdOculto").val(IdTipoDeEvaluacion);

        $.each(response, function(index, data) {

            $("#TxtTipoDeEvaluacion").val(data.TxtTipoDeEvaluacion);
            $("#TxtDescripcion").val(data.TxtDescripcion);

        });
    });
}

function ActualizarTipoDeEvaluacion() {
    var settings = {
        "url": UrlApi + "ActualizarTipoDeEvaluacion",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdTipoDeEvaluacion": $("#IdOculto").val(),
            "TxtTipoDeEvaluacion": $("#TxtTipoDeEvaluacion").val(),
            "TxtDescripcion": $("#TxtDescripcion").val(),
            "TxtToken": sessionStorage.getItem('token')

        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El tipo de evaluacion se modificó correctamente.');
                $('#AgregarTipoDeEvaluacionModal').modal('hide');
                LimpiarFormulario();
                ObtenerTiposDeEvaluacion();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el tipo de evaluacion.');

            }
        });
    });

}

function Guardar() {
    if ($("#IdOculto").val() == "Eliminar") {
        EliminarTipoDeEvaluacion(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarTipoDeEvaluacion();
    } else {
        AgregarTipoDeEvaluacion();
    }
}

function Eliminar(IdTipoDeEvaluacion) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdTipoDeEvaluacion;
}