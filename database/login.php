<?php 
	include('database.php');

	$EncodedData = file_get_contents('php://input');
	$DecodedData = json_decode($EncodedData,true);

	$email = $DecodedData['email'];
	$password = md5($DecodedData['password']);

	$IQ = "SELECT * FROM user_table WHERE email='$email' AND password='$password'";

	$R = mysqli_query($CN,$IQ);
	$count = mysqli_num_rows($R);

	if($count==1){
		$Message="Login Successful.";
		$_SESSION['email'] = $email;
	} else {
		$Message="Invalid Email and Password.";
	}

	$Response[] = array("Message"=>$Message);
	echo json_encode($Response);

?>