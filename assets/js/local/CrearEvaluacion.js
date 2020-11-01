var UrlApi = "http://localhost:64315/API/";
//var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";
var ModalConfirmación = document.getElementById("ModalConfirmacion");
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

function