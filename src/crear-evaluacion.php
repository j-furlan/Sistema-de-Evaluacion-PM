<!DOCTYPE html>
<html lang="en">

<head>

<?php include('../layout/head.html'); ?>

  <title>SB Admin 2 - Crear Evaluacion </title>

</head>

<body id="page-top" onload="ObtenerEvaluaciones(); ObtenerDatos();">

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
          <h1 class="h3 mb-4 text-gray-800">Crear Una Nueva Evaluacion</h1>
          

          <!-- Formulario Encabezado -->
          <div class="card w-75 mx-auto shadow mb-4">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col">
                        <h6 class="m-0 font-weight-bold text-primary">Creacion de Encabezado</h6>
                        <input type="hidden" id="IdOculto" value="0" />
                    </div>
                  <div class="col ml-2">
<!--                       <a class="float-right" data-toggle="modal" data-target="#AgregarEvaluacionModal" onclick="LimpiarFormulario();"><i class="fas fa-user-plus fa-2x text-primary"></i></a>
 -->                  </div>
                </div>
            </div>

            <div class="card-body">
              <form id="registroEncabezadoEvaluacion">
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label>Tipo de Evaluación</label>
                    <select id="SelectTipoDeEvaluacion" class="form-control">
                      <option >Elegir...</option>
                    </select>
                  </div>

                <div class="form-group col-md-4">
                  <label>Año</label>
                    <input type="number" class="form-control" id="TxtAnio" placeholder="Año">
                </div>
              </div>

                <div class="text-center">
                  <button type="button" class="btn btn-danger" onclick="LimpiarFormulario();">Cancelar</button>
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalConfirmacion">Guardar</button>
                </div>
              </form>
            </div>
          </div>

          <!-- Datatable -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col">
                        <h6 class="m-0 font-weight-bold text-primary">Lista De Evaluaciones Creadas</h6>
                        <input type="hidden" id="IdOculto" value="0" />
                    </div>
                  <div class="col ml-2">
                      <a class="float-right" data-toggle="modal" data-target="#AgregarFactoresModal" onclick="LimpiarFormulario();"><i class="fas fa-user-plus fa-2x text-primary"></i></a>
                  </div>
                </div>
            </div>

            <div class="card-body">
              <div class="table-responsive">
                  <table class="table table-bordered DatosEvaluaciones" id="" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                        <th>Año</th>
                        <th>Tipo de Evaluación</th>
                        <th>Descripción</th>
                        <th colspan="3">Opciones</th>
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


  <!-- Agregar Factores Modal-->
  <div class="modal fade" id="AgregarFactoresModal" tabindex="-1" role="dialog" aria-labelledby="exampleAddUserModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
          <h5 class="modal-title" id="exampleAddUserModal">Agregar o Modificar Factores:</h5>
          <p id="EncabezadoSeleccionado"></p>
          </div>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close" onclick="LimpiarFormulario();">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
        <form id="registroEvaluaciones">
          <div class="form-group">
              <label>Factor</label>
              <select id="SelectFactor" class="form-control" onchange="getval(this.value);">
                <option >Elegir...</option>
              </select>
          </div>
          <div class="form-group">
            <label>SubFactor</label>
              <select id="SelectSubFactor" class="form-control">
                <option >Elegir...</option>
              </select>
          </div>
      
            <div class="text-center">
              <button type="button" class="btn btn-danger" onclick="LimpiarFormulario();">Cancelar</button>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalConfirmacion">Guardar</button>
            </div>
          </form>
      

        </div>
        <div class="modal-footer">
          
        <div class="table-responsive">
                  <table class="table table-bordered DatosFactores" id="" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                        <th>Factor</th>
                        <th>SubFactor</th>
                        </tr>
                      </thead>
                  <tbody></tbody>
                </table>
              </div>

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

  <!-- Page level plugins -->
  <script src="../assets/vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="../assets/vendor/datatables/dataTables.bootstrap4.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="../assets/js/demo/datatables-demo.js"></script>
  <script src="../assets/js/local/CrearEvaluacion.js"></script>
</body>

</html>
