var UrlApi = "http://localhost:64315/API/" // cambiar puerto de nuestra API

function MenuUsuario(){
var settings = {
    "url": UrlApi + "MenuUsuario",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
        "TxtToken":sessionStorage.getItem('token'),
        "IdModulo":1
    }),
  };
  
  $.ajax(settings).done(function (response) {

    $.each(response, function(index, data){
        var IdMenuPadre = data.IdMenuPadre;

        if (IdMenuPadre == 0){
            var opcion = "<div class = 'dropdown'> <a class='btn dropdown-toggle' id='dropdownMenuLink' data-toggle='dropdown'>"+ data.TxtNombre +"</a>"
            + "<div class='dropdown-menu' id='"+data.IdMenu+"'></div></div>"; 
        }
        else
        {
            var item = "<a class='dropdown-item' href='"+ data.TxtLink+".html'>"+data.TxtNombre+"</a>";
        }

        $(opcion).appendTo("#Menu");
        $(item).appendTo("#"+data.IdMenuPadre);

    });
    
  });

}