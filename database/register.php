<?php 
	include('database.php');

	$EncodedData = file_get_contents('php://input');
	$DecodedData = json_decode($EncodedData,true);

	$full_name = $DecodedData['full_name'];
	$email = $DecodedData['email'];
	$password = md5($DecodedData['password']);

	$IQ = "insert into user_table(full_name, email, password) values('$full_name','$email','$password')";

	$R = mysqli_query($CN,$IQ);

	if($R){
		$Message="User has been Registered Successfully!";
	} else {
		$Message="Server Error...Please try later.";
	}

	$Response[] = array("Message"=>$Message);
	echo json_encode($Response);

?>