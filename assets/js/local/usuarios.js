var UrlApi = "http://localhost:64315/API/";
//var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";

function AgregarUsuario() {
    var settings = {
        "url": UrlApi + "AgregarUsuario",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "TxtNombres": $("#TxtNombres").val(),
            "TxtApellidos": $("#TxtApellidos").val(),
            "TxtDireccion": $("#TxtDireccion").val(),
            "TxtEmail": $("#TxtEmail").val(),
            "TxtPassword": $("#TxtPassword").val(),
            "TxtToken": sessionStorage.getItem('token'),
        }),
    };

    $.ajax(settings).done(function(response) {

        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Usuario se agregó correctamente.');
                LimpiarFormulario();
                ObtenerUsuarios();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadró, no se puede agregar el usuario');
            }
        });
    });
}

function LimpiarFormulario() {
    $("#IdOculto").val("");
    $("#TxtNombres").val("");
    $("#TxtApellidos").val("");
    $("#TxtDireccion").val("");
    $("#TxtEmail").val("");
    $("#TxtPassword").val("");
}

function ObtenerUsuarios() {
    $(".DatosUsuario td").remove();

    var settings = {
        "url": UrlApi + "ObtenerUsuarios",
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
            sessionStorage.setItem('Usuarios', response.length);

            var fila = "<tr> <td>" + data.TxtNombres +
                "</td><td>" + data.TxtDireccion +
                "</td><td>" + data.TxtEmail +
                "</td><td class='text-center'><a href='#' id='EditarUsuario' onclick='ObtenerDatosUsuario(" + data.IdUsuario + ");'><i class='fas fa-user-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdUsuario + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a> </tr>";
            $(fila).appendTo(".DatosUsuario");
        });
    });
}

function EliminarUsuario(IdUsuario) {
    var settings = {
        "url": UrlApi + "EliminarUsuario",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdUsuario": IdUsuario,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {

                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Usuario se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerUsuarios();

            } else {

                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el usuario');

            }
        });
    });
}

function ObtenerDatosUsuario(IdUsuario) {
    var settings = {
        "url": UrlApi + "ObtenerDatosUsuario",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdUsuario": IdUsuario,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        //mostra modal para editar usuario
        $('#AddUserModal').modal('show');
        LimpiarFormulario();
        $("#IdOculto").val(IdUsuario);

        $.each(response, function(index, data) {
            $("#TxtNombres").val(data.TxtNombres);
            $("#TxtApellidos").val(data.TxtApellidos);
            $("#TxtDireccion").val(data.TxtDireccion);
            $("#TxtEmail").val(data.TxtEmail);
            $("#TxtPassword").val(data.TxtPassword);

        });
    });
}

function ActualizarUsuario() {
    var settings = {
        "url": UrlApi + "ActualizarUsuario",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdUsuario": $("#IdOculto").val(),
            "TxtNombres": $("#TxtNombres").val(),
            "TxtApellidos": $("#TxtApellidos").val(),
            "TxtDireccion": $("#TxtDireccion").val(),
            "TxtEmail": $("#TxtEmail").val(),
            "TxtPassword": $("#TxtPassword").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {

                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Usuario se modificó correctamente.');
                LimpiarFormulario();
                ObtenerUsuarios();

            } else {

                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el usuario');

            }
        });
    });

}

function Guardar() {

    if ($("#IdOculto").val() == "Eliminar") {
        EliminarUsuario(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarUsuario();
    } else {
        AgregarUsuario();
    }
}

function Eliminar(IdUsuario) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdUsuario;
}