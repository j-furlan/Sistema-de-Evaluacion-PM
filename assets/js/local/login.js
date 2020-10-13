var UrlApi = "http://localhost:64315/API/"; // cambiar puerto de nuestra API 


function InicioDeSesion() {

    var email = $("#TxtEmail").val();
    var password = $("#TxtPassword").val();

    if (email == "" || password == "") {

        myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Porfavor llenar todos los campos.');

    } else {

        var settings = {
            "url": UrlApi + "InicioDeSesion",
            "method": "POST",
            "timeout": 0,
            "headers": { "Content-Type": "application/json" },
            "data": JSON.stringify({
                "TxtEmail": $("#TxtEmail").val(),
                "TxtPassword": $("#TxtPassword").val()
            }),
            error: function() {
                setTimeout(function() {
                    $('#exampleModalCenter').modal('hide');
                    myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'No se pudo conectar el servidor.');
                }, 6000);
                $('#exampleModalCenter').modal('show');
            }
        };

        $.ajax(settings).done(function(response) {
            $.each(response, function(index, data) {

                if (data.IntResultado > 0) {

                    sessionStorage.setItem('token', data.TxtToken);
                    sessionStorage.setItem('Nombre', data.TxtUsuario);

                    window.location.href = "./src/dashboard.php";

                    MenuUsuario();

                } else {
                    myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Usuario o Contraseña invalida.');
                }
            });
        });
    }
}

//OBTIENE LOS DATOS PARA EL MENÚ DESDE LA BASE DE DATOS

function MenuUsuario() {
    var settings = {
        "url": UrlApi + "MenuUsuario",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "TxtToken": sessionStorage.getItem('token'),
            "IdModulo": 1
        }),
    };

    $.ajax(settings).done(function(response) {

        if (response.length == 0) {
            setTimeout(function() {
                myNotification.showNotification('fas fa-heart-broken', 'danger', 'Ooopps!', 'La sesión ha concluido.');
            }, 2000);

            window.location.href = "../index.html";

        } else {
            sessionStorage.setItem('ResultadoMenuDeUsuario', JSON.stringify(response));
        }
    });
}