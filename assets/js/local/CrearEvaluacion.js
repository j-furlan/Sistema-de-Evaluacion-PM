var UrlApi = "http://localhost:64315/API/";
//var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var LblEncabezado = document.getElementById("EncabezadoSeleccionado");
var RegistroEliminar = "";

function ObtenerTiposDeEvaluacion() {
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

        $.each(response, function(index, data) {
            var opcion = "<option class='opciones' value='" + data.IdTipoDeEvaluacion + "'>" + data.TxtTipoDeEvaluacion + "</option>";
            $(opcion).appendTo("#SelectTipoDeEvaluacion");
        });
    });
}

function ObtenerFactores() {
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
        $.each(response, function(index, data) {
            var opcion = "<option class='opciones' value='" + data.IdFactor + "'>" + data.TxtFactor + "</option>";
            $(opcion).appendTo("#SelectFactor");
        });
    });
}

function getval(seleccion) {
    console.log(seleccion);
    var FactorSeleccionado = seleccion;
    ObtenerSubFactoresFactor(FactorSeleccionado);
}

function ObtenerSubFactoresFactor(FactorSeleccionado) {
    var settings = {
        "url": UrlApi + "ObtenerSubFactoresFactor",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdFactor": FactorSeleccionado,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
        $("#SelectSubFactor").val($("#SelectSubFactor option:first").val());
        $.each(response, function(index, data) {
            var opcion = "<option class='opciones' value='" + data.IdSubFactor + "'>" + data.TxtSubFactor + "</option>";
            $(opcion).appendTo("#SelectSubFactor");
        });

    });
}

function ObtenerDatos() {

    $(".opciones").remove();

    ObtenerTiposDeEvaluacion();
    ObtenerFactores();

}

function ObtenerEvaluacionesEncabezados() {
    $(".DatosEvaluaciones td").remove();

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
        LimpiarFormularioEncabezado();
        $.each(response, function(index, data) {
                var fila = "<tr><td>" + data.IdEvaluacionEncabezado +
                "</td><td>" + data.Anio +
                "</td><td>" + data.TxtTipoDeEvaluacion +
                "</td><td>" + data.TxtDescripcion +
                "</td><td class='text-center'><a href='#' onclick='ObtenerDatosEvaluacionEncabezado(" + data.IdEvaluacionEncabezado + ");'><i class='fas fa-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='ObtenerDatosEvaluacionDetalle(" + data.IdEvaluacionEncabezado + ");' data-toggle='modal' data-target='#AgregarFactoresModal'><i class='fas fa-sliders-h text-info'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdEvaluacionEncabezado + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-trash-alt text-danger'></i></a></tr>";
            $(fila).appendTo(".DatosEvaluaciones");
        });
    });
}

function ObtenerDatosEvaluacionEncabezado(IdEvaluacionEncabezado) {
    LimpiarFormularioEncabezado();
    var settings = {
        "url": UrlApi + "ObtenerDatosEvaluacionEncabezado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEvaluacionEncabezado": IdEvaluacionEncabezado,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };
    $.ajax(settings).done(function(response) {
        $("#IdOculto").val(IdEvaluacionEncabezado);
        $.each(response, function(index, data) {          
            $("#SelectTipoDeEvaluacion option[value=" + data.IdEvaluacionEncabezado + "]").prop("selected", true);        
            $("#TxtAnio").val(data.Anio);

        });
    });
}

//funcion paa agregar el encabezado de la evaluacion creada
function AgregarEvaluacionEncabezado() {
    var settings = {
        "url": UrlApi + "AgregarEvaluacionEncabezado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            "IdTipoDeEvaluacion": $("#SelectTipoDeEvaluacion option:selected").val(),
            "Anio": $("#TxtAnio").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };
    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Factor se agregó correctamente.');
                LimpiarFormularioEncabezado();
                ObtenerEvaluacionesEncabezados();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo agregar el Factor');
            }
        });

    });
}

//funcion para lipiar el formulario de encabezado al momento que se agrego un nueva evaluacion
function LimpiarFormularioEncabezado() {
    $("#SelectTipoDeEvaluacion").val($("#SelectTipoDeEvaluacion option:first").val());
    $("#TxtAnio").val("");
}

function ActualizarEvaluacionEncabezado() {
    var settings = {
        "url": UrlApi + "ActualizarEvaluacionEncabezado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEvaluacionEncabezado": $("#IdOculto").val(),
            "IdTipoDeEvaluacion": $("#SelectTipoDeEvaluacion option:selected").val(),
            "Anio": $("#TxtAnio").val(),
            "TxtToken": sessionStorage.getItem('token')
        }),
    };
    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El EvaluacionesEncabezado se modificó correctamente.');
                LimpiarFormularioEncabezado();
                ObtenerEvaluacionesEncabezados();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el EvaluacionesEncabezado.');
            }
        });
    });
}

function EliminarEvaluacionEncabezado(IdEvaluacionEncabezado) {
    var settings = {
        "url": UrlApi + "EliminarEvaluacionEncabezado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEvaluacionEncabezado": IdEvaluacionEncabezado,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };
    $.ajax(settings).done(function(response) {
        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El Evaluacion se eliminó correctamente.');
                LimpiarFormularioEncabezado();
                ObtenerEvaluacionesEncabezados();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el evaluacion.');
            }
        });
    });
}

function Guardar() {
    if ($("#IdOculto").val() == "Eliminar") {
        EliminarEvaluacionEncabezado(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarEvaluacionEncabezado();
    } else {
        AgregarEvaluacionEncabezado();
    }
}

function Eliminar(IdEvaluacionEncabezado) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdEvaluacionEncabezado;
}

//funcion para obtener lo datos del detalle de la evaluacion que se va creando
function ObtenerDatosEvaluacionDetalle(IdEvaluacionEncabezado){
    var settings = {
        "url": UrlApi + "ObtenerDatosEvaluacionDetalle",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEvaluacionDetalle": IdEvaluacionEncabezado,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };
    $.ajax(settings).done(function(response) {
        $("#IdOculto").val(IdEvaluacionEncabezado);
        $.each(response, function(index, data) {          
            $("#SelectFactor option[value=" + data.IdFactor + "]").prop("selected", true);        
            $("#SelectSubFactor option[value=" + data.IdSubFactor + "]").prop("selected", true);        

        });
    });

}

// esta funcion limpiara los campos de formlario donde se elijen los factores y sub factores
function LimpiarFormularioEvaluacionDetalle() {
    $("#SelectFactor").val($("#SelectFactor option:first").val());
    $("#SelectSubFactor").val($("#SelectSubFactor option:first").val());
}