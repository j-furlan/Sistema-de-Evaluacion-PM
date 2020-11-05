var UrlApi = "http://localhost:64315/API/";
//var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
var IdEvaluacionEncabezado = "";
var LblEncabezado = document.getElementById("EncabezadoSeleccionado");
var RegistroEliminar = "";


/*------------------------------- ENCABEZADO ----------------------------------*/

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
            var opcion = "<option class='opcionesTE' value='" + data.IdTipoDeEvaluacion + "'>" + data.TxtTipoDeEvaluacion + "</option>";
            $(opcion).appendTo("#SelectTipoDeEvaluacion");
        });
    });
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
                "</td><td class='text-center'><a href='#' onclick='ObtenerEncabezadoSeleccion(" + data.IdEvaluacionEncabezado + "); ObtenerTituloSeleccion(" + data.Anio + ",\"" + data.TxtTipoDeEvaluacion + "\");' data-toggle='modal' data-target='#AgregarFactoresModal'><i class='fas fa-sliders-h text-info'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='EliminarEncabezado(" + data.IdEvaluacionEncabezado + ");' data-toggle='modal' data-target='#ModalConfirmacionEncabezado'><i class='fas fa-trash-alt text-danger'></i></a></tr>";
            $(fila).appendTo(".DatosEvaluaciones");
        });
    });
}

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
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El encabezado se agregó correctamente.');
                LimpiarFormularioEncabezado();
                ObtenerEvaluacionesEncabezados();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo agregar el encabezado.');
            }
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

            $("#SelectTipoDeEvaluacion option[value=" + data.IdTipoDeEvaluacion + "]").prop("selected", true);
            $("#TxtAnio").val(data.Anio);

        });
    });
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
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El encabezado se modificó correctamente.');
                LimpiarFormularioEncabezado();
                ObtenerEvaluacionesEncabezados();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS!', 'Algo no cuadro, no se pudo modificar el encabezado.');
            }

        });
    });
}

function LimpiarFormularioEncabezado() {
    $("#IdOculto").val("");
    $("#SelectTipoDeEvaluacion").val($("#SelectTipoDeEvaluacion option:first").val());
    $("#TxtAnio").val("");
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
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El encabezado se eliminó correctamente.');
                LimpiarFormularioEncabezado();
                ObtenerEvaluacionesEncabezados();
            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el encabezado.');
            }

        });
    });
}

function GuardarEncabezado() {
    if ($("#IdOculto").val() == "Eliminar") {
        EliminarEvaluacionEncabezado(RegistroEliminar);
        $("#IdOculto").val("");
    } else if ($("#IdOculto").val() > 0) {
        ActualizarEvaluacionEncabezado();
    } else {
        AgregarEvaluacionEncabezado();
    }
}

function EliminarEncabezado(IdEvaluacionEncabezado) {
    $("#IdOculto").val("Eliminar");
    RegistroEliminar = IdEvaluacionEncabezado;
}



/*------------------------ DETALLE ---------------------------*/

function ObtenerEncabezadoSeleccion(IdEncabezado) {

    IdEvaluacionEncabezado = IdEncabezado;
    ObtenerEvaluacionDetalle(IdEncabezado);

}

function ObtenerTituloSeleccion(anio, titulo) {

    LblEncabezado.innerHTML = " Evaluación: " + anio + "-" + titulo + "  ";
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

function ObtenerDatos() {
    $(".opciones").remove();

    ObtenerTiposDeEvaluacion();
    ObtenerFactores();

}

function ObtenerFactorSeleccion(seleccion) {

    var FactorSeleccionado = seleccion;
    ObtenerSubFactores(FactorSeleccionado);

}

function ObtenerSubFactores(FactorSeleccionado) {

    $("#SelectSubFactor .opciones").remove();

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

        $.each(response, function(index, data) {

            var opcion = "<option class='opciones' value='" + data.IdSubFactor + "'>" + data.TxtSubFactor + "</option>";
            $(opcion).appendTo("#SelectSubFactor");

        });
    });
}


function ObtenerEvaluacionDetalle(IdEncabezado) {
    console.log(sessionStorage.getItem('token'));
    $(".DatosFactores td").remove();

    var settings = {
        "url": UrlApi + "ObtenerFactoresUnicosPorEncabezado",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "TxtToken": sessionStorage.getItem('token'),
            "IdEvaluacionEncabezado": IdEncabezado
        }),
    };

    $.ajax(settings).done(function(response) {


        $.each(response, function(index, data) {

            var factoresTabla =
                "<tr><td class='text-center align-middle'>" + data.TxtFactor +
                "</td><td><table Id='factor" + data.IdFactor + "'></table></td></tr>";
            $(factoresTabla).appendTo(".DatosFactores");

        });

    });

    ObtenerSubFactoresTabla(IdEncabezado);
}

function ObtenerSubFactoresTabla(IdEncabezado) {

    var settings = {
        "url": UrlApi + "ObtenerEvaluacionesDetalle",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "TxtToken": sessionStorage.getItem('token'),
        }),
    };

    $.ajax(settings).done(function(response) {


        $.each(response, function(index, data) {

            console.log(data.TxtSubFactor + " " + data.IdFactor);

            if (data.IdEvaluacionEncabezado == IdEncabezado) {
                var subfactor = "<tr><td width='100%'>" + data.TxtSubFactor +
                    "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdEvaluacionDetalle + ")' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-trash-alt text-danger'></i></a></td></tr>";
                $(subfactor).appendTo("#factor" + data.IdFactor);
                console.log(subfactor);
            }
        });
    });
}

//No se utiliza en la pagina
function ObtenerDatosEvaluacionDetalle(IdEvaluacion) {

    LimpiarFormularioEvaluacionDetalle();

    var settings = {
        "url": UrlApi + "ObtenerDatosEvaluacionDetalle",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEvaluacionDetalle": IdEvaluacion,
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

function LimpiarFormularioEvaluacionDetalle() {

    $("#IdOculto").val("");
    $("#SelectFactor").val($("#SelectFactor option:first").val());
    $("#SelectSubFactor").val($("#SelectSubFactor option:first").val());

}

function AgregarEvaluacionDetalle() {

    var settings = {
        "url": UrlApi + "AgregarEvaluacionDetalle",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEvaluacionEncabezado": IdEvaluacionEncabezado,
            "IdFactor": $("#SelectFactor option:selected").val(),
            "IdSubFactor": $("#SelectSubFactor option:selected").val(),
            "TxtToken": sessionStorage.getItem('token'),
        }),
    };

    $.ajax(settings).done(function(response) {

        $.each(response, function(index, data) {
            if (data.Resultado > 0) {
                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'Los factores se agregaron correctamente.');
                LimpiarFormularioEvaluacionDetalle();
                ObtenerEvaluacionDetalle(IdEvaluacionEncabezado);

            } else {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pueden agregar los factores.');
            }
        });
    });
}

function EliminarEvaluacionDetalle() {

    var settings = {
        "url": UrlApi + "EliminarEvaluacionDetalle",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdEvaluacionDetalle": RegistroEliminar,
            "TxtToken": sessionStorage.getItem('token')
        }),
    };

    $.ajax(settings).done(function(response) {

        $.each(response, function(index, data) {
            if (data.Resultado > 0) {

                myNotification.showNotification('fas fa-smile', 'success', 'Exito!', 'El subfactor se eliminó correctamente.');
                LimpiarFormularioEvaluacionDetalle();
                ObtenerEvaluacionDetalle(IdEvaluacionEncabezado);

            } else {

                myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Algo no cuadro, no se pudo eliminar el subfactor.');

            }
        });
    });

    RegistroEliminar = "";
}

function Eliminar(IdEvaluacionDetalle) {
    RegistroEliminar = IdEvaluacionDetalle;
}