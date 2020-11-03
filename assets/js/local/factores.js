var UrlApi = "http://localhost:64315/API/";
//var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";


function AgregarFactor() {
    var settings = {
        "url": UrlApi + "AgregarFactor",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            "TxtFactor": $("#TxtFactor").val(),
            "TxtDescripcion": $("#TxtDescripcion").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Factor se agregó correctamente.');
                LimpiarFormulario();
                ObtenerFactores();
                $('#AgregarFactorModal').modal('hide');
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo agregar el Factor');
            }
        });

    });
}

function LimpiarFormulario() {
    $("#IdOculto").val("");
    $("#TxtFactor").val("");
    $("#TxtDescripcion").val("");
}

function ObtenerFactores() {
    $(".DatosFactores td").remove();

    var settings = {
        "url": UrlApi + "ObtenerFactores",
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
            sessionStorage.setItem('Factores', response.length);
            console.log(sessionStorage.getItem('Factores'));
            var fila = "<tr> <td>" + data.IdFactor +
                "</td><td>" + data.TxtFactor +
                "</td><td>" + data.TxtDescripcion +
                "</td><td>" + data.FechaIngreso +
                "<td class='text-center'><a href='#' id='EditarFactor' onclick='ObtenerDatosFactor(" + data.IdFactor + ");'><i class='fas fa-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdFactor + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-trash-alt text-danger'></i></a> </tr>";

            $(fila).appendTo(".DatosFactores");
        });
    });
}

function EliminarFactor(IdFactor) {
    var settings = {
        "url": UrlApi + "EliminarFactor",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdFactor": IdFactor,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Factor se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerFactores();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el Factor');
            }
        });
    });
}

function ObtenerDatosFactor(IdFactor) {
    var settings = {
        "url": UrlApi + "ObtenerDatosFactor",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdFactor": IdFactor,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        //mostra modal para editar especialidad
        $('#AgregarFactorModal').modal('show');
        LimpiarFormulario();
        $("#IdOculto").val(IdFactor);

        $.each(response, function(index, data) {

            $("#TxtFactor").val(data.TxtFactor);
            $("#TxtDescripcion").val(data.TxtDescripcion);

        });
    });
}

function ActualizarFactor() {
    var settings = {
        "url": UrlApi + "ActualizarFactor",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdFactor": $("#IdOculto").val(),
            "TxtFactor": $("#TxtFactor").val(),
            "TxtDescripcion": $("#TxtDescripcion").val(),
            "TxtToken": sessionStorage.getItem('token')

        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Factor se modificó correctamente.');
                $('#AgregarFactorModal').modal('hide');
                LimpiarFormulario();
                ObtenerFactores();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el Factor');

            }
        });
    });

}

function Guardar() {
    if ($("#IdOculto").val() == "Eliminar") {
        EliminarFactor(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarFactor();
    } else {
        AgregarFactor();
    }
}

function Eliminar(IdPuesto) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdPuesto;
}