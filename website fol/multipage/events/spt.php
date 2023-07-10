<?php
$server = "localhost";
$username = "root";
$password ="";

$con = mysqli_connect($server, $username, $password);
if(!$con){
    die("connection to the server failed due to".mysqli_connect_error());
}

$class = $_POST['class'] ;
$roll = $_POST['roll'] ;
$name = $_POST['name'] ;

$sql = "INSERT INTO `sport`.`sport` ( `class`, `role`, `name`) VALUES ('$class', '$roll', '$name');";
 //echo $sql;

if($con->query($sql) == true){
    echo "successfully inserted " ;
}
else{
    echo "ERROR: $sql <br> $con->error" ;
}
 $con->close();
?>
