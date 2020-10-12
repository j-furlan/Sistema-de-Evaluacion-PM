var UrlApi = "http://localhost:53207/API/";// cambiar puerto de nuestra API 
VerificarExistenciaToken();

function VerificarExistenciaToken(){
    var SessionToken = sessionStorage.getItem('token');
    console.log(SessionToken);
    if(SessionToken === null){
      window.location.href = "../index.html";
      sessionStorage.clear();
    }else{
      console.log("Error");
    }
}

function VerificarVigenciaToken(){
    var settings = {
        "url": "http://localhost:53207/api/VerificarVigenciaToken",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify(
            {
            "TxtToken": sessionStorage.getItem('token')
        }
        ),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        if(response === 0){
          sessionStorage.clear();
            window.location.href = "../index.html";
        }

      });
}

