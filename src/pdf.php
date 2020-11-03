<!DOCTYPE html>
<html lang="en">

<head>

<?php include('../layout/head.html'); ?>

  <title>SB Admin 2 - Blank</title>


</head>

<body id="page-top">

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
          <h1 class="h3 mb-2 text-gray-800">Tabla de Reportres PDF</h1>
          <p class="mb-4"> plantilla para mostrar los datos ... </p>

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Evaluaciones</h6>
            </div>
            <div class="card-body">
            
                <div class="table-responsive">
                    <div id="toPDF">    
                        <table class="table">
                        <div class="text-center"><img class="text-center" src="../assets/img/logo.png"></div>
                            <div class="text-justify">                         
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book. It has survived not only five centuries, but also the leap into 
                                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker including 
                                    versions of Lorem Ipsum.
                                </p>
                            </div>
                            
                            
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>         
                        </table>
                    </div>
                    <button  id="getPDF" type="button" class="btn btn-info" onclick="getPDF() ">Download PDF</button>
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

  <?php include('../layout/scripts.html'); ?>
    <script src="../assets/js/take-pdf.js"></script>
    <!-- JS DE CANVAS PARA GENERAR PDFs -->
    <script type="text/javascript" src="html2canvas.js"></script>
    <script type="text/javascript" src="jspdf.min.js"></script>
</body>

</html>
