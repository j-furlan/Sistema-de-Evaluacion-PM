var UrlApi = "http://localhost:64315/API/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";

function AgregarRenglon() {
    var settings = {
        "url": UrlApi + "AgregarRenglon",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            "TxtRenglon": $("#TxtRenglon").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Renglon se agregó correctamente.');
                LimpiarFormulario();
                ObtenerRenglones();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo agregar el Renglon');
            }
        });
    });
}

function LimpiarFormulario() {
    $("#TxtRenglon").val("");
}

function ObtenerRenglones() {
    $(".DatosRenglones td").remove();
    var settings = {
        "url": UrlApi + "ObtenerRenglones",
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
            var fila = "<tr> <td>" + index +
                "</td><td>" + data.TxtRenglon +
                "</td><td>" + data.FechaIngreso +
                "<td class='text-center'><a href='#' id='EditarRenglones' onclick='ObtenerDatosRenglon(" + data.IdRenglon + ");'><i class='fas fa-user-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdRenglon + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a> </tr>";
            $(fila).appendTo(".DatosRenglones");
        });
    });
}

function EliminarRenglon(IdRenglon) {
    var settings = {
        "url": UrlApi + "EliminarRenglon",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdRenglon": IdRenglon,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Renglon se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerRenglones();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el Renglon.');

            }
        });
    });
}

function ObtenerDatosRenglon(IdRenglon) {
    var settings = {
        "url": UrlApi + "ObtenerDatosRenglon",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdRenglon": IdRenglon,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        //mostra modal para editar especialidad
        $('#AgregarRenglonModal').modal('show');
        LimpiarFormulario();
        $("#IdOculto").val(IdRenglon);

        $.each(response, function(index, data) {
            $("#TxtRenglon").val(data.TxtRenglon);

        });
    });
}

function ActualizarRenglon() {
    var settings = {
        "url": UrlApi + "ActualizarRenglon",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdRenglon": $("#IdOculto").val(),
            "TxtRenglon": $("#TxtRenglon").val(),
            "TxtToken": sessionStorage.getItem('token')

        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Renglon se modificó correctamente.');
                LimpiarFormulario();
                ObtenerRenglones();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el Renglon');

            }
        });
    });

}

function Guardar() {
    if ($("#IdOculto").val() == "Eliminar") {
        EliminarRenglon(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarRenglon();
    } else {
        AgregarRenglon();
    }
}


function Eliminar(IdRenglon) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdRenglon;
}