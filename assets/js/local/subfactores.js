var UrlApi = "http://localhost:64315/API/";
//var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";


function AgregarSubFactor() {
    var settings = {
        "url": UrlApi + "AgregarSubFactor",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            "TxtSubFactor": $("#TxtSubFactor").val(),
            "TxtDescripcion": $("#TxtDescripcion").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El SubFactor se agregó correctamente.');
                LimpiarFormulario();
                ObtenerSubFactores();
                $('#AgregarSubFactorModal').modal('hide');
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo agregar el SubFactor');
            }
        });

    });
}

function LimpiarFormulario() {
    $("#IdOculto").val("");
    $("#TxtSubFactor").val("");
    $("#TxtDescripcion").val("");
}

function ObtenerSubFactores() {
    $(".DatosSubFactores td").remove();

    var settings = {
        "url": UrlApi + "ObtenerSubFactores",
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
            sessionStorage.setItem('SubFactores', response.length);
            console.log(sessionStorage.getItem('SubFactores'));
            var fila = "<tr> <td>" + data.IdSubFactor +
                "</td><td>" + data.TxtSubFactor +
                "</td><td>" + data.TxtDescripcion +
                "</td><td>" + data.FechaIngreso +
                "<td class='text-center'><a href='#' id='EditarSubFactor' onclick='ObtenerDatosSubFactor(" + data.IdSubFactor + ");'><i class='fas fa-user-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdSubFactor + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a> </tr>";

            $(fila).appendTo(".DatosSubFactores");
        });
    });
}

function EliminarSubFactor(IdSubFactor) {
    var settings = {
        "url": UrlApi + "EliminarSubFactor",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdSubFactor": IdSubFactor,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El SubFactor se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerSubFactores();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el SubFactor');
            }
        });
    });
}

function ObtenerDatosSubFactor(IdSubFactor) {
    var settings = {
        "url": UrlApi + "ObtenerDatosSubFactor",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdSubFactor": IdSubFactor,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        //mostra modal para editar especialidad
        $('#AgregarSubFactorModal').modal('show');
        LimpiarFormulario();
        $("#IdOculto").val(IdSubFactor);

        $.each(response, function(index, data) {

            $("#TxtSubFactor").val(data.TxtSubFactor);
            $("#TxtDescripcion").val(data.TxtDescripcion);

        });
    });
}

function ActualizarSubFactor() {
    var settings = {
        "url": UrlApi + "ActualizarSubFactor",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdSubFactor": $("#IdOculto").val(),
            "TxtSubFactor": $("#TxtSubFactor").val(),
            "TxtDescripcion": $("#TxtDescripcion").val(),
            "TxtToken": sessionStorage.getItem('token')

        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El SubFactor se modificó correctamente.');
                $('#AgregarSubFactorModal').modal('hide');
                LimpiarFormulario();
                ObtenerSubFactores();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el SubFactor');

            }
        });
    });

}

function Guardar() {
    if ($("#IdOculto").val() == "Eliminar") {
        EliminarSubFactor(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarSubFactor();
    } else {
        AgregarSubFactor();
    }
}

function Eliminar(IdSubFactor) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdSubFactor;
}