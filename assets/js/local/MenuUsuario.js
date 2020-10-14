//var UrlApi = "http://localhost:64315/API/"; // cambiar puerto de nuestra API 
var UrlApi = "http://api-furlan.cetcom.edu.gt/api/";

//OBTIENE LOS DATOS PARA EL MENU DESDE LA VARIABLE DE SESION.

function MenuUsuarioLocal() {

    let MenuDeUsuario = JSON.parse(sessionStorage.getItem('ResultadoMenuDeUsuario'));

    if (MenuDeUsuario !== "") {
        $.each(MenuDeUsuario, function(index, data) {

            var IdMenuPadre = data.IdMenuPadre;

            if (IdMenuPadre == 0) {
                var collapseId = "collapse" + data.IdMenu;
                var collapseIdTarget = "#collapse" + data.IdMenu;
                var opcion =
                    "<li class='nav-item'>" +
                    "<a class='nav-link collapsed' href='#' data-toggle='collapse' data-target='" + collapseIdTarget + "' >" +
                    "<i class='fas fa-fw fa-cog'></i>" +
                    "<span>" + data.TxtNombre + "</span>" +
                    "</a>" +
                    "<div class='collapse' id='" + collapseId + "' data-parent='#accordionSidebar'>" +
                    "<div class='bg-white py-2 collapse-inner rounded' id='" + data.IdMenu + "'>" +
                    "</div></div></li>";
            } else {
                var item = "<a class='collapse-item' href='" + data.TxtLink + ".php'>" + data.TxtNombre + "</a>";
            }

            $(opcion).appendTo(".MenuUsuario");
            $(item).appendTo("#" + IdMenuPadre);

        });
    }
}