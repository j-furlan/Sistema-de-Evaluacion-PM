var UrlApi = "http://localhost:53207/api/";

function AgregarUsuario() {
  var settings = {
    "url": UrlApi + "AgregarUsuario",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify
      ({

        "TxtNombres": $("#TxtNombres").val(),
        "TxtApellidos": $("#TxtApellidos").val(),
        "TxtDireccion": $("#TxtDireccion").val(),
        "TxtEmail": $("#TxtEmail").val(),
        "TxtPassword": $("#TxtPassword").val(),
        "TxtToken": sessionStorage.getItem('token'),
      }),
  };

  $.ajax(settings).done(function (response) {
    alert("Todo Bien!!, el usuario fue creado correctamente");
    LimpiarFormulario();
    ObtenerUsuarios();

  });
}

function LimpiarFormulario() {
  $("#TxtNombres").val("");
  $("#TxtApellidos").val("");
  $("#TxtDireccion").val("");
  $("#TxtEmail").val("");
  $("#TxtPassword").val("");
}

function ObtenerUsuarios() {

  $(".DatosUsario td").remove();
  var settings = {
    "url": UrlApi + "ObtenerUsuarios",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
console.log(response);
console.log(sessionStorage.getItem('token'));
    LimpiarFormulario();

    $.each(response, function (index, data)
    {
      var fila = "<tr> <td>" + data.TxtNombres +
        "</td><td>" + data.TxtDireccion +
        "</td><td>" + data.TxtEmail +
        "</td><td class='text-center'><a href='#' id='EditarUsuario' onclick='ObtenerDatosUsuario(" + data.IdUsuario + ");'><i class='fas fa-user-edit text-warning'></i></a>" +
        "</td><td class='text-center'><a href='#' onclick='EliminarUsuario(" + data.IdUsuario + ");'><i class='fas fa-user-times text-danger'></i></a> </tr>";
      $(fila).appendTo(".DatosUsario");
    });
  });
}

function EliminarUsuario(IdUsuario) {
  var settings = {
    "url": UrlApi + "EliminarUsuario",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify
      ({
        "IdUsuario": IdUsuario
      }),
  };

  $.ajax(settings).done(function (response) {
    $.each(response, function (index, data)
    {
      if (data.Resultado > 0) {
        alert("Ok, se logro eliminar correctamente el usuario");
        LimpiarFormulario();
        ObtenerUsuarios();
      }
      else {
        alert("Ups! Algo no cuadro, no se puedo eliminar el usuario");
      }
    });
  });
}

function ObtenerDatosUsuario(IdUsuario) {
  var settings = {
    "url": UrlApi + "ObtenerDatosUsuario",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify
      ({
        "IdUsuario": IdUsuario
      }),
  };

  $.ajax(settings).done(function (response) {
    //mostra modal para editar usuario
    $('#AddUserModal').modal('show');
    LimpiarFormulario();
    $("#IdOculto").val(IdUsuario);

    $.each(response, function (index, data)
    {
      $("#TxtNombres").val(data.TxtNombres);
      $("#TxtApellidos").val(data.TxtApellidos);
      $("#TxtDireccion").val(data.TxtDireccion);
      $("#TxtEmail").val(data.TxtEmail);
      $("#TxtPassword").val(data.TxtPassword);

    });
  });
}

function ActualizarUsuario() {
  var settings = {
    "url": UrlApi + "ActualizarUsuario",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify
      ({
        "IdUsuario": $("#IdOculto").val(),
        "TxtNombres": $("#TxtNombres").val(),
        "TxtApellidos": $("#TxtApellidos").val(),
        "TxtDireccion": $("#TxtDireccion").val(),
        "TxtEmail": $("#TxtEmail").val(),
        "TxtPassword": $("#TxtPassword").val(),
      }),
  };

  $.ajax(settings).done(function (response) {
    $.each(response, function (index, data)
    {
      if (data.Resultado > 0) {
        alert("Yay!!, se logro actualizar correctamente el usuario");
        LimpiarFormulario();
        ObtenerUsuarios();
      }
      else {
        alert("Oh no! Algo no cuadro, no se puedo actualizar el usuario");
      }
    });
  });

}

function Guardar() {
  if ($("#IdOculto").val() > 0)
  {
    ActualizarUsuario();
  }
  else {
    AgregarUsuario();
  }
}
