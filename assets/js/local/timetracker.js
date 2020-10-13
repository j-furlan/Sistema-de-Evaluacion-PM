  $(function() {

      function timeTracker() {
          setInterval(function() {
              //se captura el valor de la ultima actividad guardada de en sessionStorage
              var ultimoTimeStamp = sessionStorage.getItem("ultimaActividadTimeStamp");
              //se llama la funcion comparar tiempo y se le pasa el valor del sessionStorage
              compararTiempo(ultimoTimeStamp);
          }, 5000);
      }

      function compararTiempo(stringTiempo) {
          var maxSegundos = 20; //numero maximo de segundos de inactividad
          var horaActual = new Date(); //hora actual
          var tiempoDeInactividad = new Date(stringTiempo); // valor de ultima hora que se movio el cursor
          var tiempoDiff = horaActual - tiempoDeInactividad; //diferencia hora actual y hora ultima actividad
          var segundosDeInactividad = Math.floor((tiempoDiff / 1000));

          if (segundosDeInactividad > maxSegundos) {
              sessionStorage.removeItem("ultimaActividadTimeStamp");
              //myNotification.showNotification('fas fa-heart-broken', 'danger', 'OOOPS !', 'Se Vencio la Session');
              VerificarVigenciaToken();
              return false;
          } else {
              console.log("hora Actual - " + horaActual + "\ntiempo De Inactividad " + tiempoDeInactividad + "\nsegundos De Inactividad " + segundosDeInactividad);
          }
      }

      if (typeof(Storage) !== "undefined") {
          $(document).mousemove(function() {
              //variable para capturar hora que se mueve el cursor
              var horaTimeStamp = new Date();
              //el valor de hora se agrega al sessionStorage
              sessionStorage.setItem("ultimaActividadTimeStamp", horaTimeStamp);
          });

          timeTracker();
      }
  });