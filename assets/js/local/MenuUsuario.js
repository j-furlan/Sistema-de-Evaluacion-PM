var UrlApi = "http://localhost:53207/API/" // cambiar puerto de nuestra API

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
    //console.log(sessionStorage.getItem('token'));

    $.ajax(settings).done(function(response) {
//console.log(response);
if(response.length == 0){
    setTimeout(function() {
        myNotification.showNotification('fas fa-heart-broken', 'danger', 'Ooopps!', 'La Sesion ha conlcuido.');
    }, 2000);
    window.location.href = "../index.html";

}
else{
    //alert("este es el menu");

        $.each(response, function(index, data) {
            var IdMenuPadre = data.IdMenuPadre;

            if (IdMenuPadre == 0) {
                var collapseId = "collapse"+ data.IdMenu;
                var collapseIdTarget = "#collapse" + data.IdMenu;
                var opcion =
                    "<li class='nav-item'>" +
                    "<a class='nav-link collapsed' href='#' data-toggle='collapse' data-target='" + collapseIdTarget + "' >" +
                    "<i class='fas fa-fw fa-cog'></i>" +
                    "<span>" + data.TxtNombre + "</span>" +
                    "</a>" +
                    "<div class='collapse' id='" + collapseId + "' data-parent='#accordionSidebar'>" +
                    "<div class='bg-white py-2 collapse-inner rounded' id='"+data.IdMenu+"'>"+
                    "</div></div></li>";                    
            } else {
                var item = "<a class='collapse-item' href='" + data.TxtLink + ".php'>" + data.TxtNombre + "</a>";
            }
//console.log(item);
            $(opcion).appendTo(".MenuUsuario");            
            $(item).appendTo("#" + IdMenuPadre);

        });
    }

    });

}