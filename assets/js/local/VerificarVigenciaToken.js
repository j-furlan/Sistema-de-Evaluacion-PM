//var UrlApi = "http://localhost:64315/API/"; // cambiar puerto de nuestra API 
var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";
VerificarExistenciaToken();

function VerificarExistenciaToken() {
    var SessionToken = sessionStorage.getItem('token');

    if (SessionToken === null) {
        window.location.href = "../index.html";
        sessionStorage.clear();
    } else {
        console.log("Si existe un token.");
    }
}

function VerificarVigenciaToken() {
    var settings = {
        "url": "http://localhost:64315/api/VerificarVigenciaToken",
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
        console.log(response);
        if (response === 0) {
            sessionStorage.clear();
            myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Su sesión expiró, inicie sesión de nuevo.');
            setTimeout(function() {
                window.location.href = "../index.html";
            }, 3000);
        }

    });
}