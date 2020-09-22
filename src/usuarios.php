<!DOCTYPE html>
<html lang="en">

<head>

<?php include('../layout/head.html'); ?>

  <title>SB Admin 2 - Tables</title>
  <link href="../assets/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">


</head>

<body id="page-top" onload="ObtenerUsuarios();">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <?php include('../layout/sidebar.html'); ?>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <?php include('../layout/navbar.html'); ?>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">Usuarios</h1>

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col">
                        <h6 class="m-0 font-weight-bold text-primary">Lista De Usuarios</h6>
                        <input type="hidden" id="IdOculto" value="0" />
                    </div>
                  <div class="col ml-2">
                      <a class="float-right" data-toggle="modal" data-target="#AddUserModal"><i class="fas fa-user-plus fa-2x text-primary"></i></a>
    
                  </div>
                  
                </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                  <table class="table table-bordered DatosUsario" id="" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                        <th>Nombres</th>
                        <th>Direccion</th>
                        <th>Email</th>
                        <th colspan="2">Opciones</th>
                        </tr>
                      </thead>
                  <tbody>
                    
                    
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>

        </div>
        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->



    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

        <!-- Footer -->
        <?php include '../layout/footer.html'; ?>
      <!-- End of Footer -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>

   <!-- Add User Modal-->
   <div class="modal fade" id="AddUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleAddUserModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleAddUserModal">Registro de Usuarios</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
        <form id="registroUsuario">
            <div class="form-group">
              <label>Nombres</label>
              <input type="text" class="form-control" id="TxtNombres" placeholder="Nombre Completo">
            </div>
            <div class="form-group">
              <label>Apellidos</label>
              <input type="text" class="form-control" id="TxtApellidos" placeholder="Apellido Completo">
            </div>
            <div class="form-group">
              <label>Direccion</label>
              <input type="text" class="form-control" id="TxtDireccion" placeholder="Direccion">
            </div>
            <div class="form-group">
              <label>Correo</label>
              <input type="email" class="form-control" id="TxtEmail" placeholder="pipo@pips.com">
            </div>
            <div class="form-group">
              <label>Contraseña</label>
              <input type="password" class="form-control" id="TxtPassword" placeholder="Contraseña">
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-danger" onclick="LimpiarFormulario();">Cancelar</button>
              <button type="button" class="btn btn-primary" onclick="Guardar();">Guardar</button>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          
        </div>
      </div>
    </div>
  </div>

 <?php include '../layout/scripts.html'; ?>
  <!-- Page level plugins -->
  <script src="../assets/vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="../assets/vendor/datatables/dataTables.bootstrap4.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="../assets/js/demo/datatables-demo.js"></script>
  <script src="../assets/js/local/usuarios.js"></script>
  <script>
    $(document).ready(function(){

      $("#EditarUsuario").on("click", function(){
     alert("clicked");
    });
   });
  </script>

</body>

</html>
