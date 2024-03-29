<!DOCTYPE html>
<html lang="en">

<head>

<?php include('../layout/head.html'); ?>

  <title>SisEval - Crear Evaluacion Aplicada </title>

</head>

<body id="page-top" onload="ObtenerEvaluacionesAplicadasEncabezados(); ObtenerDatosEncabezado();">

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

          <!-- Formulario Encabezado -->
          <div class="card mx-auto shadow mb-4">
           

            <div class="card-header">
                    <div class="col">
                        <h6 class="m-0 font-weight-bold text-primary pb-2">Agregar Encabezado de Evaluacion Aplicada</h6>
                        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fas fa-plus text-white"></i>
                        </a>
                        <input type="hidden" id="IdOculto" value="0" />
                    </div>
                <div class="collapse" id="collapseExample">
                    <div class="card-body">
                        <form id="">
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label>Institución</label>
                                    <select id="SelectInstitucion" class="form-control">
                                        <option >Elegir...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Tipo de Evaluación</label>
                                    <select id="SelectEvaluacionesEncabezado" class="form-control">
                                        <option >Elegir...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Empleado</label>
                                    <select id="SelectEmpleado" class="form-control">
                                        <option >Elegir...</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                               
                                <div class="form-group col-md-3">
                                    <label>Fecha de Aplicacion</label>
                                    <input type="date" class="form-control" id="FechaDeAplicacion">
                                </div>
                                <div class="form-group col-md-3">
                                    <label>Fecha Inicial</label>
                                    <input type="date" class="form-control" id="FechaInicial">
                                </div>
                                <div class="form-group col-md-3">
                                    <label>Fecha Final</label>
                                    <input type="date" class="form-control" id="FechaFinal">
                                </div>
                                <div class="form-group col-md-3">
                                    <label class="text-center">`</label>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-danger" onclick="LimpiarFormularioEncabezado();">Cancelar</button>
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalConfirmacionEncabezado">Guardar</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
          </div>

          <!-- Datatable -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col">
                        <h6 class="m-0 font-weight-bold text-primary">Lista De Encabezados Creadas</h6>
                        <input type="hidden" id="IdOculto" value="0" />
                    </div>
                  <div class="col ml-2">
                      <a class="float-right" data-toggle="modal" data-target="#AgregarFactoresModal" onclick="LimpiarFormularioEncabezado();"><i class="fas fa-plus fa-2x text-primary"></i></a>
                  </div>
                </div>
            </div>

            <div class="card-body">
              <div class="table-responsive">
                  <table class="table table-bordered DatosEvaluacionesAplicadasEncabezados" id="" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                        <th>#</th>
                        <th>Institucion</th>
                        <th>Empleado</th>
                        <th>Evaluación Aplicada</th>
                        <th>Fecha Aplicación</th>
                        <th colspan="4" class="text-center">Opciones</th>
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


  <!-- Aplicar Evaluacion Detalle-->
  <div class="modal fade" id="AplicarEvaluacionDetalle" tabindex="-1" role="dialog" aria-labelledby="exampleAddUserModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary align-items-center">
         <div class="mx-auto">
           <h5 class="modal-title text-white" id="exampleAddUserModal">Ingresar Puntuaciones:</h5>
           <div class="text-primary bg-light text-center" id="EncabezadoSeleccionado"></div>
         </div>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close" onclick=" IdEvaluacionEncabezado ='';">
              <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">
        
      

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

        <div class="form-group d-flex justify-content-end align-items-center pr-3">
          <Label>Punteo Total:</Label>
          <input class="m-2 text-center" disabled type="number" id="TxtPunteoTotal"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" onclick="" data-dismiss="modal">Guardar</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Confirmación Encabezado -->
 <div class="modal fade" tabindex="-1" role="dialog" id="ModalConfirmacionEncabezado">
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
        <button type="button" class="btn btn-primary" onclick="GuardarEncabezado();" data-dismiss="modal">Guardar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>

 <!-- Modal Confirmación Datalle -->
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
        <button type="button" class="btn btn-primary" onclick="EliminarEvaluacionDetalle();" data-dismiss="modal">Guardar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="LimpiarFormularioEvaluacionDetalle();">Cancelar</button>
      </div>
    </div>
  </div>
</div>

 <!-- Modal Confirmación Datalle -->
 <div class="modal fade" tabindex="-1" role="dialog" id="ModalEvaluacionDetalle">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header bg-primary">
        <h5 class="modal-title">Datos de Evaluacion Aplicada Encabezado</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6 table-responsive">
            <label for="">Detalles Personales del Empleado</label>
            <table  class="table table-bordered" style="font-size: 12px;">
                <tr>
                  <td>Nombre</td>
                  <td>dasda</td>
                </tr>
                <tr>
                  <td>Apellido</td>
                  <td>sdsadsa</td>
                </tr>
                <tr>
                  <td>Nit</td>
                  <td>sadsadsa</td>
                </tr>
                <tr>
                  <td>DPI</td>
                  <td>dsadsadd</td>
                </tr>
                <tr>
                  <td>Fecha Agregado</td>
                  <td>sdsdsad</td>
                </tr>
            </table>
          </div>
          <div class="col-md-6 table-responsive">
            <label for="">Detalles laborales del Empleado</label>
            <table  class="table table-bordered" style="font-size: 12px;">
                <tr>
                  <td>Institucion</td>
                  <td>zccz</td>
                </tr>
                <tr>
                  <td>Puesto</td>
                  <td>cxzcxz</td>
                </tr>
                <tr>
                  <td>Especialidad</td>
                  <td>sdfsfdsf</td>
                </tr>
                <tr>
                  <td>Servicio</td>
                  <td>fgdgfdgfdgd</td>
                </tr>
                <tr>
                  <td>Renglon</td>
                  <td>dsfdfdsfdsf</td>
                </tr>
            </table>
          </div>
         </div>
         <div class="row">
          <div class="col-md-6 table-responsive">
            <label for="">Detalles Personales del Empleado</label>
            <table  class="table table-bordered" style="font-size: 12px;">
                <tr>
                  <td>Nombre</td>
                  <td>dasda</td>
                </tr>
                <tr>
                  <td>Apellido</td>
                  <td>sdsadsa</td>
                </tr>
                <tr>
                  <td>Nit</td>
                  <td>sadsadsa</td>
                </tr>
                <tr>
                  <td>DPI</td>
                  <td>dsadsadd</td>
                </tr>
                <tr>
                  <td>Fecha Agregado</td>
                  <td>sdsdsad</td>
                </tr>
            </table>
          </div>
          <div class="col-md-6 table-responsive">
            <label for="">Detalles laborales del Empleado</label>
            <table  class="table table-bordered" style="font-size: 12px;">
                <tr>
                  <td>Institucion</td>
                  <td>zccz</td>
                </tr>
                <tr>
                  <td>Puesto</td>
                  <td>cxzcxz</td>
                </tr>
                <tr>
                  <td>Especialidad</td>
                  <td>sdfsfdsf</td>
                </tr>
                <tr>
                  <td>Servicio</td>
                  <td>fgdgfdgfdgd</td>
                </tr>
                <tr>
                  <td>Renglon</td>
                  <td>dsfdfdsfdsf</td>
                </tr>
            </table>
          </div>
         </div>
      </div>
      <div class="modal-footer">
       <p>======</p>
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
  <script src="../assets/js/local/evaluacionesaplicadasencabezado.js"></script>
  <!--<script src="../assets/js/local/CrearEvaluacion.js"></script>-->

</body>

</html>
