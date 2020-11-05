<!DOCTYPE html>
<html lang="en">

<head>

<?php include('../layout/head.html'); ?>

  <title>SisEval - Evaluaciones Detalles</title>

</head>

<body id="page-top" onload="ObtenerEvaluacionesAplicadasEncabezado(); ObtenerDatos();">

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

           <!-- DataTables Example -->
           <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col">
                        <h6 class="m-0 font-weight-bold text-primary">Lista De Evaluaciones Aplicadas Encabezado</h6>
                        <input type="hidden" id="IdOculto" value="0" />
                    </div>
                  <div class="col ml-2">
                      <a class="float-right" data-toggle="modal" data-target="#AgregarModal" onclick="LimpiarFormulario();"><i class="fas fa-plus fa-2x text-primary"></i></a>
                  </div>
                </div>
            </div>

            <div class="card-body">
              <div class="table-responsive">
                  <table class="table table-bordered" id="DatosEvaluacionesAplicadasEncabezados" width="100%" cellspacing="0" style="overflow-x: scroll;">
                      <thead>
                        <tr>
                        <th>#</th>
                        <th>Institucion</th>
                        <th>CodigoUE</th>
                        <th>Empleado</th>
                        <th>Id Encabezado</th>
                        <th>Tipo Evaluacion</th>
                        <th>Fecha Aplicada</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Punteo Total</th>
                        <th>PlanDeMejora</th>
                        <th>Nombres</th>
                        <th>Fecha Agregado</th>                      
                        <th colspan="2" class="text-center">Opciones</th>
                        </tr>
                      </thead>
                  <tbody></tbody>
                </table>
              </div>
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

  <!-- Agregar Empleado Modal-->
  <div class="modal fade" id="AgregarModal" tabindex="-1" role="dialog" aria-labelledby="exampleAddUserModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title" id="exampleAddUserModal">Registro de Evaluaciones Detalles</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close" onclick="LimpiarFormulario();">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div class="modal-body">
        <form>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Institucion</label>
                <select id="SelectInstitucion" class="form-control">
                  <option >Elegir...</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label>Evsluacion Encabezado</label>
                <select id="SelectEvaluacionesEncabezado" class="form-control">
                  <option >Elegir...</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Empleado</label>
                <select id="SelectEmpleado" class="form-control">
                  <option >Elegir...</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label>Fecha De Aplicacion</label>
                <input type="date" class="form-control" id="FechaDeAplicacion"/>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Fecha Inicial</label>
                <input type="date" class="form-control" id="FechaInicial"/>
              </div>
              <div class="form-group col-md-6">
                <label>Fecha Final</label>
                <input type="date" class="form-control" id="FechaFinal"/>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>Punteo Final</label>
                <input type="number" class="form-control" id="DblPunteoTotal"/>
              </div>            
            </div>
            <div class="form-group col-md-12">
              <label>Observaciones del Jefe</label>
             <textarea class="form-control" id="TxtObservacionesDelJefe"></textarea>
            </div>
            <div class="form-group col-md-12">
              <label>Observacionde del Empeleado</label>
             <textarea class="form-control" id="TxtObservacionesDelEmpleado">  </textarea>          
            </div>
            <div class="form-group col-md-12">
              <label>Necesita Plan de Mejora</label>
              <select id="IntNecesitaPlanDeMejora" class="form-control">
                <option >Elegir...</option>
                <option >Si</option>
                <option >No</option>
              </select>
            </div>           
                     
            <div class="text-center">
              <button type="button" class="btn btn-danger" onclick="LimpiarFormulario();">Cancelar</button>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalConfirmacion">Guardar</button>
            </div>
          </form>
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

  <script type="text/javascript" src="../assets/js/local/evaluacionesaplicadasencabezado.js"></script>

</body>

</html>
