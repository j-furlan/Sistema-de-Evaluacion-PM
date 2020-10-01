var UrlApi = "http://localhost:53207/API/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";


function AgregarPuesto() {
    var settings = {
        "url": UrlApi + "AgregarPuesto",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            "TxtPuesto": $("#TxtPuesto").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El puesto se agregó correctamente.');
                LimpiarFormulario();
                ObtenerPuestos();
                $('#AgregarPuestoModal').modal('hide');
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo agregar el Puesto');
            }
        });

    });
}

function LimpiarFormulario() {
    $("#IdOculto").val("");
    $("#TxtPuesto").val("");
}

function ObtenerPuestos() {
    $(".DatosPuestos td").remove();

    var settings = {
        "url": UrlApi + "ObtenerPuestos",
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
            sessionStorage.setItem('Puestos', response.length);
            console.log(sessionStorage.getItem('Puestos'));
            var fila = "<tr> <td>" + index +
                "</td><td>" + data.TxtPuesto +
                "</td><td>" + data.FechaIngreso +
                "<td class='text-center'><a href='#' id='EditarPuesto' onclick='ObtenerDatosPuesto(" + data.IdPuesto + ");'><i class='fas fa-user-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdPuesto + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a> </tr>";

            $(fila).appendTo(".DatosPuestos");
        });
    });
}

function EliminarPuesto(IdPuesto) {
    var settings = {
        "url": UrlApi + "EliminarPuesto",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdPuesto": IdPuesto,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El puesto se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerPuestos();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el Puesto');
            }
        });
    });
}

function ObtenerDatosPuesto(IdPuesto) {
    var settings = {
        "url": UrlApi + "ObtenerDatosPuesto",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdPuesto": IdPuesto,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        //mostra modal para editar especialidad
        $('#AgregarPuestoModal').modal('show');
        LimpiarFormulario();
        $("#IdOculto").val(IdPuesto);

        $.each(response, function(index, data) {
            
            $("#TxtPuesto").val(data.TxtPuesto);

        });
    });
}

function ActualizarPuesto() {
    var settings = {
        "url": UrlApi + "ActualizarPuesto",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdPuesto": $("#IdOculto").val(),
            "TxtPuesto": $("#TxtPuesto").val(),
            "TxtToken": sessionStorage.getItem('token')

        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El puesto se modificó correctamente.');
                $('#AgregarPuestoModal').modal('hide');
                LimpiarFormulario();
                ObtenerPuestos();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el Puesto');

            }
        });
    });

}

function Guardar() {
    if ($("#IdOculto").val() == "Eliminar") {
        EliminarPuesto(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarPuesto();
    } else {
        AgregarPuesto();
    }
}

function Eliminar(IdPuesto) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdPuesto;
}