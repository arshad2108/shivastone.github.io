<!DOCTYPE html>
<html>
<head>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table, td, th {
  border: 1px solid black;
  padding: 5px;
}

th {text-align: left;}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="javascript/bootstrap.min.js"></script>
<script src="javascript/wow.js"></script>
<script src="javascript/index.js"></script>
<script src="javascript/invoice.js"></script>
</head>
<body>

<?php
$con = new mysqli('sql3.freemysqlhosting.net','sql3421133','djYbYn2bn6','sql3421133');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"invoice");


if (isset($_GET["month"])){
  $month=$_GET['month'];
  
  
  $sql="SELECT * FROM `invoice` WHERE MONTH(`invoice date`)= $month";

    
  

}







if ($results = mysqli_query($con,$sql)){


echo"<table>
<tr>
<th>invoice_no</th>
<th>invoice_date</th>


<th>quantity</th>
<th>rate</th>

<th>consigneename</th>



<th>consignee_state</th>

<th>buyername</th>


<th>buyer_state</th>
<th>view</th>
</tr>";

while($row=mysqli_fetch_row($results)){
  
  echo "<tr>";
  echo "<td>" . $row[0] . "</td>";
  echo "<td>" . $row[1] . "</td>";
  
  
  echo "<td>" . $row[5] . "</td>";
  echo "<td>" . $row[6] . "</td>";
  
  echo "<td>" . $row[8] . "</td>";
  
  
  echo "<td>" . $row[11] . "</td>";
  echo "<td>" . $row[12] . "</td>";
  
  
  echo "<td>" . $row[15] . "</td>";
  echo '<td> <a onclick="view(\''.$row[0].'\',\''.$row[1].'\',\''.$row[2].'\',\''.$row[3].'\',\''.$row[4].'\',\''.$row[5].'\',\''.$row[6].'\',\''.$row[7].'\',\''.$row[8].'\',\''.$row[9].'\',\''.$row[10].'\',\''.$row[11].'\',\''.$row[12].'\',\''.$row[13].'\',\''.$row[14].'\',\''.$row[15].'\');" class="btn btn-lg btn-default">view</a></td>';
  echo "<br>";
  
  echo "</tr>";
  

}

echo "</table>";
}
else{
  echo "fucked";
}
mysqli_close($con);
?>
</body>
</html>