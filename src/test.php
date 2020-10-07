<?php
session_start();
//$_SESSION['DURATION'] = date('h:i:s', strtotime('30 minute'));
$_SESSION['EXPIRE'] = date('h:i:s', strtotime('1 minute'));
if(isset($_POST['TokenAction']) && !empty($_POST['TokenAction'])){
    $thisToken = $_POST['SessionToken'];
    //$_SESSION['start'] = date('h:i:s a', time());
    $_SESSION['CREATED'] = date('h:i:s a', time());
   
    if($_SESSION['CREATED'] > $_SESSION['EXPIRE']){
        echo "<div class='alert alert-warning'>". $thisToken . " ". $_SESSION['CREATED'] . " Session Vencida</div>";
    }else{
        echo "<div class='alert alert-primary'>". $thisToken . " ".  $_SESSION['CREATED'] . $_SESSION['EXPIRE'] . "</div>";
    }
    
}
  ?>