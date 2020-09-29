var UrlApi = "http://localhost:64315/API/" // cambiar puerto de nuestra API 



function InicioDeSesion() {
    var email = $("#TxtEmail").val();
    var password = $("#TxtPassword").val();

    if (email == "" || password == "") {
        myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Porfavor Llenar Todos Los Campos');
    } else {
        var settings = {
            "url": UrlApi + "InicioDeSesion",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "TxtEmail": $("#TxtEmail").val(),
                "TxtPassword": $("#TxtPassword").val()
            }),
            error: function() {
                setTimeout(function() {
                    $('#exampleModalCenter').modal('hide');
                    myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'No se pudo conectar el servido.');
                }, 6000);
                $('#exampleModalCenter').modal('show');
            }
        };

        $.ajax(settings).done(function(response) {

            $.each(response, function(index, data) {
                if (data.IntResultado > 0) {
                    sessionStorage.setItem('token', data.TxtToken);
                    var token = sessionStorage.getItem('token');
                    setTimeout(function() {
                        myNotification.showNotification('fas fa-smile', 'info', 'Bienvenido !', 'Token: ' + token);
                    }, 2000);
                    window.location.href = "./src/dashboard.php";
                } else {
                    myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Usuario o Contraseña invalida.');
                }
            });

        });
    }
}