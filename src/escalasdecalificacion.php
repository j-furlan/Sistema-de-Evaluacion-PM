<!DOCTYPE html>
<html lang="en">

<head>

<?php include('../layout/head.html'); ?>

  <title>SisEval - Escalas De Calificación</title>

</head>

<body id="page-top" onload="ObtenerEscalasDeCalificacion();">

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

          <!-- Table -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col">
                        <h6 class="m-0 font-weight-bold text-primary">Lista De Escalas De Calificacion</h6>
                        <input type="hidden" id="IdOculto" value="0" />
                    </div>
                  <div class="col ml-2">
                      <a class="float-right" data-toggle="modal" data-target="#AgregarEscalaDeCalificacionModal" onclick="LimpiarFormulario();"><i class="fas fa-plus fa-2x text-primary"></i></a>
                  </div>
                </div>
            </div>

            <div class="card-body">
              <div class="table-responsive">
                  <table class="table table-bordered DatosEscalasDeCalificacion" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                        <th>Id</th>
                        <th>Nombre Escala Calificacion</th>
                        <th>Punteo</th>
                        <th>Descripcion</th>
                        <th>Fecha Agregado</th>
                        <th colspan="2">Opciones</th>
                        </tr>
                      </thead>
                  <tbody></tbody>
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
  <?php include('../layout/footer.html'); ?>
  <!-- End of Footer -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Agregar Especialidad Modal-->
  <div class="modal fade" id="AgregarEscalaDeCalificacionModal" tabindex="-1" role="dialog" aria-labelledby="exampleAddUserModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleAddUserModal">Registro de Escalas De Calificacion</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
        <form id="registroPuesto">
            <div class="form-group">
              <label>Factores</label>
              <input type="text" class="form-control" id="TxtEscalaDeCalificacion" placeholder="Nombre de Escala de Calificacion">
            </div>
            <div class="form-group">
              <label>Punteo</label>
              <input type="text" class="form-control" id="DblPunteo" placeholder="Punteo de Calificacion">
            </div>
            <div class="form-group">
              <label>Descripción</label>
              <input type="text" class="form-control" id="TxtDescripcion" placeholder="Descripción de Escala de Calificacion">

            </div>

            <div class="text-center">
              <button type="button" class="btn btn-danger" onclick="LimpiarFormulario();">Cancelar</button>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalConfirmacion">Guardar</button>
            </div>
          </form>
        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>
  </div>

  <!-- Modal Confirmación -->
  <div class="modal fade" tabindex="-1" role="dialog" id="ModalConfirmacion">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Confirmación</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>¿Estas seguro de guardar cambios?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="Guardar();" data-dismiss="modal">Guardar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>

  <?php include('../layout/scripts.html'); ?>

  <script src="../assets/vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="../assets/vendor/datatables/dataTables.bootstrap4.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="../assets/js/demo/datatables-demo.js"></script>
  <script src="../assets/js/local/escalasdecalificacion.js"></script>
</body>

</html>
