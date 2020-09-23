var UrlApi = "http://localhost:64315/API/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";



function AgregarEmpleado() {
    var settings = {
        "url": UrlApi + "AgregarEmpleado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify
            ({
                "TxtNit": $("#TxtNit").val(),
                "TxtDpi": $("#TxtDpi").val(),
                "TxtNombres": $("#TxtNombres").val(),
                "TxtApellidos": $("#TxtApellidos").val(),
                "IdPuesto": $("#SelectPuesto option:selected").val(),
                "IdEspecialidad": $("#SelectEspecialidad option:selected").val(),
                "IdServicio":$("#SelectServicio option:selected").val(),
                "IdRenglon": $("#SelectRenglon option:selected").val(),
                "IdInstitucion": $("#SelectInstitucion option:selected").val(),
                "TxtToken": sessionStorage.getItem('token'),
            }),
    };

    $.ajax(settings).done(function (response) {

        $.each(response, function (index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Empleado se agregó correctamente.');
                LimpiarFormulario();
                ObtenerEmpleados();
            }
            else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se puede agregar el Empleado');
            }
        });
    });
}

function LimpiarFormulario() {
    $("#TxtNit").val("");
    $("#TxtDpi").val("");
    $("#TxtNombres").val("");
    $("#TxtApellidos").val("");
    $("#SelectPuesto").val($("#SelectPuesto option:first").val());
    $("#SelectEspecialidad").val($("#SelectEspecialidad option:first").val());
    $("#SelectServicio").val($("#SelectServicio option:first").val());
    $("#SelectRenglon").val($("#SelectRenglon option:first").val());
    $("#SelectInstitucion").val($("#SelectInstitucion option:first").val());
}

function ObtenerEmpleados() {
    $(".DatosEmpleados td").remove();

    var settings = {
        "url": UrlApi + "ObtenerEmpleados",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "TxtToken": sessionStorage.getItem('token')
        }),
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(sessionStorage.getItem('token'));
        LimpiarFormulario();

        $.each(response, function (index, data) {
            var fila = "<tr><td>" + data.TxtNit +
                "</td><td>" + data.TxtDpi +
                "</td><td>" + data.TxtNombres +
                "</td><td>" + data.TxtApellidos +
                "</td><td>" + data.TxtPuesto +
                "</td><td>" + data.TxtEspecialidad +
                "</td><td>" + data.TxtServicio +
                "</td><td>" + data.TxtRenglon +
                "</td><td>" + data.TxtInstitucion +
                "</td><td class='text-center'><a href='#' id='EditarEmpleado' onclick='ObtenerDatosEmpleado(" + data.IdEmpleado + ");'><i class='fas fa-user-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdEmpleado + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a> </tr>";
            /*         "</td><td class='text-center'><a href='#' onclick='EliminarUsuario(" + data.IdUsuario + ");'><i class='fas fa-user-times text-danger'></i></a> </tr>";
             */
            $(fila).appendTo(".DatosEmpleados");
        });
    });
}

function EliminarEmpleado(IdEmpleado) {
    var settings = {
        "url": UrlApi + "EliminarEmpleado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify
            ({
                "IdEmpleado": IdEmpleado,
                "TxtToken": sessionStorage.getItem('token')
            }),
    };
    $.ajax(settings).done(function (response) {
        $.each(response, function (index, data) {
            if (data.Resultado > 0) {

                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El empleado se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerEmpleados();

            }
            else {

                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el empleado.');

            }
        });
    });
}

function ObtenerDatosEmpleado(IdEmpleado) {
    $(".opciones").remove();
    ObtenerDatos();


    var settings = {
        "url": UrlApi + "ObtenerDatosEmpleado",
        "method": "POST",
        "timeout": 0,
        "headers": {
        "Content-Type": "application/json"
        },
        "data": JSON.stringify
            ({
                "IdEmpleado": IdEmpleado,
                "TxtToken": sessionStorage.getItem('token')
            }),
    };

    $.ajax(settings).done(function (response) {
        //mostra modal para editar especialidad
        $('#AgregarEmpleadoModal').modal('show');
        LimpiarFormulario();
        $("#IdOculto").val(IdEmpleado);

        $.each(response, function (index, data) {
            $("#TxtNit").val(data.TxtNit);
            $("#TxtDpi").val(data.TxtDpi);
            $("#TxtNombres").val(data.TxtNombres);
            $("#TxtApellidos").val(data.TxtApellidos);
            $("#SelectPuesto option[value='" + data.IdPuesto + "']").attr("selected", true);
            $("#SelectEspecialidad option[value='" + data.IdEspecialidad + "']").attr("selected", true);
            $("#SelectServicio option[value='" + data.IdServicio + "']").attr("selected", true);
            $("#SelectRenglon option[value='" + data.IdRenglon + "']").attr("selected", true);
            $("#SelectInstitucion option[value='" + data.IdInstitucion + "']").attr("selected", true);

        });
    });
}

function ActualizarEmpleado() {
    var settings = {
        "url": UrlApi + "ActualizarEmpleado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify
            ({
                "IdEmpleado": $("#IdOculto").val(),
                "TxtNit": $("#TxtNit").val(),
                "TxtDpi": $("#TxtDpi").val(),
                "TxtNombres": $("#TxtNombres").val(),
                "TxtApellidos": $("#TxtApellidos").val(),
                "IdPuesto": $("#SelectPuesto option:selected").val(),
                "IdEspecialidad": $("#SelectEspecialidad option:selected").val(),
                "IdServicio":$("#SelectServicio option:selected").val(),
                "IdRenglon": $("#SelectRenglon option:selected").val(),
                "IdInstitucion": $("#SelectInstitucion option:selected").val(),
                "TxtToken": sessionStorage.getItem('token'),
            }),
    };

    $.ajax(settings).done(function (response) {
        $.each(response, function (index, data) {
            if (data.Resultado > 0) {

                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El empleado se modificó correctamente.');
                LimpiarFormulario();
                ObtenerEmpleados();

            }
            else {

                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el empleado.');

            }
        });
    });
}

function Guardar() {

    if ($("#IdOculto").val() == "Eliminar") {
        EliminarEmpleado(RegistroEliminar);
        $("#IdOculto").val("");
    }
    else if ($("#IdOculto").val() > 0) {
        ActualizarEmpleado();
    }
    else {
        AgregarEmpleado();
    }
}


function Eliminar(IdEmpleado) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdEmpleado;
}

function ObtenerDatos() {
    console.log("Se obtuvieron los datos");
    ObtenerEspecialidades();
    ObtenerPuestos();
    ObtenerServicios();
    ObtenerRenglones();
}

function ObtenerEspecialidades() {

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
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(sessionStorage.getItem('token'));

        $.each(response, function (index, data) {
            var opcion = "<option class='opciones' value='" + data.IdEspecialidad + "'>" + data.TxtEspecialidad + "</option>";
            $(opcion).appendTo("#SelectEspecialidad");
        });
    });
}

function ObtenerPuestos() {

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
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(sessionStorage.getItem('token'));

        $.each(response, function (index, data) {
            var opcion = "<option class='opciones' value='" + data.IdPuesto + "'>" + data.TxtPuesto + "</option>";
            $(opcion).appendTo("#SelectPuesto");
        });
    });
}

function ObtenerServicios() {

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
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(sessionStorage.getItem('token'));

        $.each(response, function (index, data) {
            var opcion = "<option class='opciones' value='" + data.IdServicio + "'>" + data.TxtServicio + "</option>";
            $(opcion).appendTo("#SelectServicio");
        });
    });
}

function ObtenerRenglones() {

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
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(sessionStorage.getItem('token'));

        $.each(response, function (index, data) {
            var opcion = "<option class='opciones' value='" + data.IdRenglon + "'>" + data.TxtRenglon + "</option>";
            $(opcion).appendTo("#SelectRenglon");
        });
    });
}
