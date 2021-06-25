<!DOCTYPE html>
<html>
<head>
</head>
<body>
	
<?php

	$inv_no = $_GET['inv_no'];
	$date = $_GET['date'];
	$rate = $_GET['rate'];
	$quantity = $_GET['quantity'];
	$permit = $_GET['permit'];
	$igst = $_GET['igst'];
	$destination= $_GET['destination'];
	$vehicle = $_GET['vehicle'];
	$consigneename = $_GET['consigneename'];
	$consig_add = $_GET['consig_add'];
	$consig_gst = $_GET['consig_gst'];
	$consignee_state = $_GET['consignee_state'];
	$buyername = $_GET['buyername'];
	$buyer_add = $_GET['buyer_add'];
	$buyer_gst = $_GET['buyer_gst'];
	$buyer_state = $_GET['buyer_state'];
	
	

	// Database connection
	$conn = new mysqli('sql3.freemysqlhosting.net','sql3421133','djYbYn2bn6','sql3421133');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {

		if ($stmt = $conn->prepare("INSERT INTO `invoice`(`invoice no.`, `invoice date`, `permit`, `destination`, `vehicle no`, `quantity`, `rate`, `igst`, `consignee name`, `consignee address`, `consignee gst`, `consignee state`, `buyer name`, `buyer address`, `buyer gst`, `buyer state`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)")){
		$stmt->bind_param("issssddissssssss", $inv_no, $date, $permit, $destination, $vehicle, $quantity, $rate, $igst, $consigneename, $consig_add, $consig_gst, $consignee_state, $buyername, $buyer_add, $buyer_gst, $buyer_state);
		$execval = $stmt->execute();
		
		echo "<b>data Added Successfully...</b>";
		$stmt->close();
		$conn->close();
	}
	else{
		echo "shit...";
	}
	}
?>
</body>
</html>