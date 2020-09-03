<!DOCTYPE html>
<html lang="en">

<head>
    <title>SisEval</title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <!-- Icons -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Styles -->
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/login.css">

</head>

<body>
    <div class="homepage-boxes">
        <div class="container-fluid">
            <div class="card card0 border-0">
                <div class="row d-flex">
                    <div class="col-lg-6">
                        <div class="card1 pb-5">
                            <div class="row"> <img src="./assets/images/logo.png" class="logo"> </div>
                            <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="./assets/images/LogIn.svg" class="image"> </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card2 card border-0 px-4 py-5">

                            <div class="px-3 mb-4 d-flex justify-content-center">
                                <div class="line"></div>
                                 <small class="or text-center">Ingresar</small>
                                <div class="line"></div>
                            </div>

                            <div class="row px-3"> 
                              <label class="mb-1"><h6 class="mb-0 text-sm">Correo Electrónico</h6></label>
                              <input id="TxtEmail" class="mb-4 form-control" type="text" name="email" placeholder="Ingrese un correo electrónico valido">
                            </div>

                            <div class="row px-3 ">
                              <label class="mb-1"><h6 class="mb-0 text-sm">Contraseña</h6></label>
                              <input id="TxtPassword" class="mb-2 form-control" type="password" name="password" placeholder="Ingrese la contraseña">
                            </div>

                            <div class="row px-3 mb-4">

                              <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" name="chk" class="custom-control-input">
                                <label class="custom-control-label text-sm">Recuerdame</label>
                              </div>

                              <a href="#" class="ml-auto mb-0 text-sm"> <small>¿Olvidaste tu contraseña?</small></a>
                            </div>

                            <div id="alerta"class="alert alert-danger alert-dismissible fade show d-none" role="alert"></div>

                            <div class="row mb-3 px-3 justify-content-end">
                               <button type="submit" class="button gradient-bg px-lg-5 mb-1" onclick="InicioDeSesion();">Login</button>
                               <a class="button gradient-bg px-lg-5 mb-1" href="./src/dashboard.php">Ir a Inicio</a>
                           </div>

                            <div class="row mb-4 px-3">
                               <small>¿No tienes una cuenta? <a class="text-danger">Registrarse</a></small>
                           </div>

                        </div>
                    </div>
                </div>
                <div class="footer py-4" >
                    <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2020. Todos los derechos reservados.</small>
                        <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type='text/javascript' src='./assets/js/login.js'></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>