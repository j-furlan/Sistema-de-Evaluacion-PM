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
          <h1 class="h3 mb-4 text-gray-800">Notify Page</h1>
          <div class="row">
            <div class="col-lg-8 ml-auto mr-auto">
                <div class="row">
                    <div class="col-md-4">
                        <button class="btn btn-danger btn-block" onclick="myNotification.showNotify('top','left','danger','fa fa-heart','Welcome Back','It\'s a good day to be happy')">Izquierda Superior</button>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-primary btn-block" onclick="myNotification.showNotify('top','center','primary','fa fa-heart','Welcome Back','It\'s a good day to be happy')">Centro Superior</button>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-info btn-block" onclick="myNotification.showNotify('top','right','info','fa fa-heart','Welcome Back','It\'s a good day to be happy')">Derecha Superior</button>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-8 ml-auto mr-auto">
                <div class="row">
                    <div class="col-md-4">
                        <button class="btn btn-success btn-block" onclick="myNotification.showNotify('bottom','left','success','fa fa-heart','Welcome Back','It\'s a good day to be happy')">Izquierda Inferior</button>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-warning btn-block" onclick="myNotification.showNotify('bottom','center','warning','fa fa-heart','Welcome Back','It\'s a good day to be happy')">Centro Inferior</button>
                    </div>
                    <div class="col-md-4">
                        <button class="btn bg-gradient-primary btn-block" onclick="myNotification.showNotify('bottom','right','bg-gradient-primary','fa fa-heart','Welcome Back','It\'s a good day to be happy')">Derecha Inferior</button>
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

  <?php include('../layout/scripts.html'); ?>

</body>

</html>
