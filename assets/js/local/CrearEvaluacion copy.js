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
    var FactorSeleccionado = seleccion;
    ObtenerSubFactoresFactor(seleccion);
}

function ObtenerSubFactoresFactor(seleccion) {
    var settings = {
        "url": UrlApi + "ObtenerSubFactoresFactor",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdFactor": seleccion,
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

function ObtenerDatos() {

    $(".opciones").remove();

    ObtenerTiposDeEvaluacion();
    ObtenerFactores();

}

function ObtenerEvaluaciones() {

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

        console.log(sessionStorage.getItem('token'));
        LimpiarFormulario();

        $.each(response, function(index, data) {
            sessionStorage.setItem('EvaluacionesEncabezado', response.length);
            console.log(response.length);
            var fila = "<tr><td>" + data.Anio +
                "</td><td>" + data.TxtTipoDeEvaluacion +
                "</td><td>" + data.TxtDescripcion +
                "</td><td class='text-center'><a href='#' id='EditarEvaluacionEncabezado' onclick='ObtenerDatosEvaluacionEncabezado(" + data.IdEvaluacionEncabezado + ");'><i class='fas fa-edit text-warning'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='ObtenerFactoresSubFactorTabla();' data-toggle='modal' data-target='#AgregarFactoresModal'><i class='fas fa-sliders-h text-info'></i></a>" +
                "</td><td class='text-center'><a href='#' onclick='Eliminar(" + data.IdEvaluacionEmpleado + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-trash-alt text-danger'></i></a></tr>";
            $(fila).appendTo(".DatosEvaluaciones");
        });
    });
}

function ObtenerFactoresSubFactorTabla() {

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

        var factores = [];

        $.each(response, function(index, data) {


            console.log("resultado: " + response.length);
            for (i = 0; i < response.length; i++) {
                if ($.inArray(data.IdFactor, factores) !== -1) {

                } else {
                    factores.push(data.IdFactor);

                    var factoresTabla =
                        "<tr><td>" + data.TxtFactor +
                        "</td><td Id='" + data.IdFactor + "'></td></tr>";
                    $(factoresTabla).appendTo(".DatosFactores");
                }
            }





            /* var factores =
                "<tr><td>" + data.TxtFactor +
                "</td><td class='SubFactores'></td></tr>";*/

            /*  var SubFactores =
                 "<tr><td width='100%'>" + data.TxtSubFactor + "</td>" +
                 "</td><td class='text-center' nowrap='true'><a href='#' onclick='EliminarSubFactor(" + data.IdSubFactor + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a></td></tr>";

             $(SubFactores).appendTo("#"+ data.IdFactor); */

            ObtenerSubFactoresTabla();
        });

        /*   $.each(response, function(index, data) {

              var SubFactores =
                  "<tr><td width='100%'>" + data.TxtSubFactor + "</td>" +
                  "</td><td class='text-center' nowrap='true'><a href='#' onclick='EliminarSubFactor(" + data.IdSubFactor + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a></td></tr>";

              $(SubFactores).appendTo("#" + data.IdFactor);

          }); */



        for (var valor of factores) {
            console.log("Valor: " + valor);
        }



    });
}

function ObtenerSubFactoresTabla() {

    

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
            var SubFactores =
                "<tr><td width='100%'>" + data.TxtSubFactor + "</td>" +
                "</td><td class='text-center' nowrap='true'><a href='#' onclick='EliminarSubFactor(" + data.IdSubFactor + ");' data-toggle='modal' data-target='#ModalConfirmacion'><i class='fas fa-user-times text-danger'></i></a></td></tr>";

            $(SubFactores).appendTo("#" + data.IdFactor);

        });
    });
}

function LimpiarFormulario() {}

function AgregarEvaluacionDetalle(variablesljj) {}

function GetNombre(anio, TipoDeEvaluacion) {

    LblEncabezado.innerText = anio + " " + TipoDeEvaluacion;

};