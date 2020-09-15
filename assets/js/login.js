var UrlApi = "http://localhost:64315/API/" // cambiar puerto de nuestra API 


function InicioDeSesion() {
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
  };
  
  $.ajax(settings).done(function (response) {

    $.each(response, function(index, data) {
        if(data.IntResultado > 0){
            sessionStorage.setItem('token',data.TxtToken);
            var token = sessionStorage.getItem('token');
            alert("Valor en variable de sesion es: " + token);
            window.location.href="./src/dashboard.html";
        }else{
            var alerta = document.getElementById("alerta");
            alerta.classList.remove("d-none");
            alerta.innerHTML = "<strong>Oops! </strong>" + data.TxtToken + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
            +"<span aria-hidden='true'>&times;</span></button>";
        }
    });
  });
}
 