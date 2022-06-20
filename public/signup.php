<?php
require_once 'config.php';

$name = trim($_POST['firstname']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$pass = trim($POST['password']);

if ($name == '' OR $email == '' OR $phone == '' OR $pass == ''){
   echo 2;
   die;
}

//Create connectiom
$conn = new mysqli($servername, $username, $password, $dbname);
//Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO main (firstname, email, phone, password) VALUES ('".$name."','".$email."', '".$phone."', '".$pass."')";
if ($conn->query($sql) === TRUE) {
	echo 1;
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
