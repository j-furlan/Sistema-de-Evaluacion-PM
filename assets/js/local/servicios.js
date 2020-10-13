var UrlApi = "http://localhost:64315/API/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";

function AgregarServicio() {
    var settings = {
        "url": UrlApi + "AgregarServicio",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            "TxtServicio": $("#TxtServicio").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El servicio se agregó correctamente.');
                LimpiarFormulario();
                ObtenerServicios();
                $('#AgregarServicioModal').modal('show');

            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo agregar el servicio');
            }
        });


    });
}

function LimpiarFormulario() {
    $("#IdOculto").val("");
    $("#TxtServicio").val("");
}

function ObtenerServicios() {
    $(".DatosServicios td").remove();
    var settings = {
        "url": UrlApi + "ObtenerServicios",
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
            sessionStorage.setItem('Servicios', response.length);
            var fila = "<tr> <td>" + index +
                "</td><td>" + data.TxtServicio +
                "</td><td>" + data.FechaIngreso +
                "<td class='text-center'><a href='#' id='EditarServicio' onclick='ObtenerDatosServicio(" + data.IdServicio + ");'><i class='fas fa-user-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdServicio + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a> </tr>";

            $(fila).appendTo(".DatosServicios");
        });
    });
}

function EliminarServicio(IdServicio) {
    var settings = {
        "url": UrlApi + "EliminarServicio",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdServicio": IdServicio,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El servicio se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerServicios();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el servicio.');

            }
        });
    });
}

function ObtenerDatosServicio(IdServicio) {
    var settings = {
        "url": UrlApi + "ObtenerDatosServicio",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdServicio": IdServicio,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        //mostra modal para editar especialidad
        $('#AgregarServicioModal').modal('show');
        LimpiarFormulario();
        $("#IdOculto").val(IdServicio);

        $.each(response, function(index, data) {
            $("#TxtServicio").val(data.TxtServicio);

        });
    });
}

function ActualizarServicio() {
    var settings = {
        "url": UrlApi + "ActualizarServicio",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdServicio": $("#IdOculto").val(),
            "TxtServicio": $("#TxtServicio").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El servicio se modificó correctamente.');
                LimpiarFormulario();
                ObtenerServicios();
                $('#AgregarServicioModal').modal('show');

            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el servicio.');

            }
        });
    });

}

function Guardar() {
    if ($("#IdOculto").val() == "Eliminar") {
        EliminarServicio(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarServicio();
    } else {
        AgregarServicio();
    }
}


function Eliminar(IdServicio) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdServicio;
}