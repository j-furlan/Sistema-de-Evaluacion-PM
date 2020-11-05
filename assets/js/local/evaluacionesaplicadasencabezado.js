var UrlApi = "http://localhost:64315/API/";
//var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var RegistroEliminar = "";


function ObtenerInstituciones() {

    var opcion = "<option class='opciones' value='1'>Ministerio de Salud Pública</option>";
    $(opcion).appendTo("#SelectInstitucion");

}


function ObtenerEvaluacionesEncabezado() {

    var settings = {
        "url": UrlApi + "ObtenerEvaluacionesEncabezado",
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

        $.each(response, function(index, data) {

            var opcion = "<option class='opciones' value='" + data.IdEvaluacionEncabezado + "'>" + data.Anio + " - " + data.TxtTipoDeEvaluacion + "</option>";
            $(opcion).appendTo("#SelectEvaluacionesEncabezado");

        });
    });
}


function ObtenerEmpleados() {

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
    $.ajax(settings).done(function(response) {

        $.each(response, function(index, data) {

            var opcion = "<option class='opciones' value='" + data.IdEmpleado + "'>" + data.TxtNombres + ' ' + data.TxtApellidos + "</option>";
            $(opcion).appendTo("#SelectEmpleado");

        });
    });
}

function ObtenerDatos() {

    $(".opciones").remove();
    ObtenerInstituciones();
    ObtenerEvaluacionesEncabezado();
    ObtenerEmpleados();

}

function ObtenerEvaluacionesAplicadasEncabezados() {

    $(".DatosEvaluacionesAplicadasEncabezados td").remove();

    var settings = {
        "url": UrlApi + "ObtenerEvaluacionesAplicadasEncabezado",
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

        console.log(sessionStorage.getItem('token'));
        LimpiarFormulario();

        $.each(response, function(index, data) {
            var fila = "<tr> <td>" + data.IdEvaluacionAplicadaEncabezado +
                "</td><td>" + data.TxtInstitucion +
                "</td><td>" + data.TxtEvaluacionEncabezado +
                "</td><td>" + data.TxtEmpleado +
                "</td><td>" + (data.FechaDeAplicacion).substring(0, 10) +
                "</td><td>" + (data.FechaInicial).substring(0, 10) +
                "</td><td>" + (data.FechaFinal).substring(0, 10) +
                "</td><td>" + data.DblPunteoTotal +
                "</td><td>" + data.TxtObservacionesDeJefe +
                "</td><td>" + data.TxtObservacionesDelEmpleado +
                "</td><td>" + data.IntNecesitaPlanDeMejora +
                "</td><td class='text-center'><a href='#' onclick='ObtenerDatosEvaluacionAplicadaEncabezado(" + data.IdEvaluacionAplicadaEncabezado + ");'><i class='fas fa-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='ObtenerEncabezadoAplicadoSeleccion(" + data.IdEvaluacionAplicadaEncabezado + ");' data-toggle='modal' data-target='#AgregarFactoresModal'><i class='fas fa-sliders-h text-info'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='EliminarEncabezadoAplicado(" + data.IdEvaluacionAplicadaEncabezado + ");' data-toggle='modal' data-target='#ModalConfirmacionEncabezado'><i class='fas fa-trash-alt text-danger'></i></a></tr>";
            $(fila).appendTo(".DatosEvaluacionesAplicadasEncabezados");

        });
    });
}


function AgregarEvaluacionAplicadaEncabezado() {

    console.log("se esatra agregando una");

    var settings = {
        "url": UrlApi + "AgregarEvaluacionAplicadaEncabezado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdInstitucion": $("#SelectInstitucion option:selected").val(),
            "IdEvaluacionEncabezado": $("#SelectEvaluacionesEncabezado option:selected").val(),
            "IdEmpleado": $("#SelectEmpleado option:selected").val(),
            "FechaDeAplicacion": $("#FechaDeAplicacion").val(),
            "FechaInicial": $("#FechaInicial").val(),
            "FechaFinal": $("#FechaFinal").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {

        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'Los datos se agregó correctamente.');
                LimpiarFormulario();
                //ObtenerEvaluacionesAplicadasEncabezados();
                $('#AgregarModal').modal('hide');

            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se puede agregar el .');
            }
        });
    });
}

function LimpiarFormulario() {
    $("#IdOculto").val("");
    $("#IdInstitucion").val($("#SelectEvaluacionesEncabezado option:first").val());
    $("#IdEvaluacionEncabezado").val($("#SelectEvaluacionesEncabezado option:first").val());
    $("#IdEmpleado").val($("#SelectEmpleado option:first").val());
    $("#FechaDeAplicacion").val("");
    $("#FechaInicial").val("");
    $("#FechaFinal").val("");
    $("#DblPunteoTotal").val("");
    $("#TxtObservacionesDelJefe").val("");
    $("#TxtObservacionesDelEmpleado").val("");
    $("#IntNecesitaPlanDeMejora").val("");
}




function EliminarEvaluacionesAplicadasEncabezado(IdEvaluacionAplicadaEncabezado) {
    var settings = {
        "url": UrlApi + "EliminarEvaluacionesAplicadasEncabezado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEvaluacionAplicadaEncabezado": IdEvaluacionAplicadaEncabezado,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };
    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {

                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'La accion se eejcuto se eliminó correctamente.');
                LimpiarFormulario();
                ObtenerEvaluacionesAplicadasEncabezados();

            } else {

                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el evaluacion.');

            }
        });
    });
}

function ObtenerDatosEvaluacionesAplicadasEncabezado(IdEvaluacionAplicadaEncabezado) {

    LimpiarFormulario();

    var settings = {
        "url": UrlApi + "ObtenerDatosEvaluacionesAplicadasEncabezado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEvaluacionAplicadaEncabezado": IdEvaluacionAplicadaEncabezado,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $('#AgregarModal').modal('show');
        $("#IdOculto").val(IdEvaluacionAplicadaEncabezado);
        console.log(IdEvaluacionAplicadaEncabezado);
        $.each(response, function(index, data) {

            $("#SelectInstitucion option[value=" + data.IdInstitucion + "]").prop("selected", true);
            $("#SelectEvaluacionesEncabezado option[value=" + data.IdEvaluacionEncabezado + "]").prop("selected", true);
            $("#SelectEmpleado option[value=" + data.IdEmpleado + "]").prop("selected", true);
            $("#FechaDeAplicacion").val(data.FechaDeAplicacion);
            $("#FechaInicial").val(data.FechaInicial);
            $("#FechaFinal").val(data.FechaFinal);
            $("#DblPunteoTotal").val(data.DblPunteoTotal);
            $("#TxtObservacionesDelJefe").val(data.TxtObservacionesDelJefe);
            $("#TxtObservacionesDelEmpleado").val(data.TxtObservacionesDelEmpleado);
            $("#IntNecesitaPlanDeMejora").val(data.IntNecesitaPlanDeMejora);
        });
    });
}


function ActualizarEvaluacionesAplicadasEncabezado() {
    var settings = {
        "url": UrlApi + "ActualizarEvaluacionesAplicadasEncabezado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEvaluacionAplicadaEncabezado": $("#IdOculto").val(),
            "IdInstitucion": $("#SelectInstitucion option:selected").val(),
            "IdEvaluacionEncabezado": $("#SelectEvaluacionesEncabezado option:selected").val(),
            "IdEmpleado": $("#SelectEmpleado option:selected").val(),
            "FechaDeAplicacion": $("#FechaDeAplicacion").val(),
            "FechaInicial": $("#FechaInicial").val(),
            "FechaFinal": $("#FechaFinal").val(),
            "DblPunteoTotal": $("#DblPunteoTotal").val(),
            "TxtObservacionesDelJefe": $("#TxtObservacionesDelJefe").val(),
            "TxtObservacionesDelEmpleado": $("#TxtObservacionesDelEmpleado").val(),
            "IntNecesitaPlanDeMejora": $("#IntNecesitaPlanDeMejora").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {

                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Evaluaciones detalle se modificó correctamente.');
                LimpiarFormulario();
                ObtenerEvaluacionesDetalles();
                $('#AgregarModal').modal('hide');

            } else {

                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el Evaluaciones detalle.');

            }
        });
    });
}



function Guardar() {

    if ($("#IdOculto").val() == "Eliminar") {
        EliminarEvaluacionesAplicadasEncabezado(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarEvaluacionesAplicadasEncabezado();
    } else {
        AgregarEvaluacionAplicadaEncabezado();
    }
}

function Eliminar(IdEvaluacionAplicadaEncabezado) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdEvaluacionAplicadaEncabezado;
}