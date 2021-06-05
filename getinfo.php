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
</head>
<body>

<?php
$con = mysqli_connect('localhost','root','','books');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"booksdata");


if (isset($_GET["interval"])){
  $interval=$_GET['interval'];
    if($interval=="year"){
       if (isset($_GET["year"])){
          
          $year=$_GET['year'];
          $sql="SELECT * FROM booksdata WHERE Year= $year";
    }
  }
  if($interval=="month"){
       if (isset($_GET["year"]) && isset($_GET["month"])){
          $month=$_GET['month'];
          $year=$_GET['year'];
          $sql="SELECT * FROM booksdata WHERE  Month = $month AND Year = $year" ;
    }
  }
  if($interval=="date"){
       if (isset($_GET["year"]) && isset($_GET["year"]) && isset($_GET["month"])){
          $date=$_GET['date'];
          $month=$_GET['month'];
          $year=$_GET['year'];
           $sql="SELECT * FROM booksdata WHERE  date = $date AND Month = $month AND Year = $year" ;
    }
  }

}







if ($results = mysqli_query($con,$sql)){

echo "<table >
<tr>
<th>S. No.</th>
<th>BookName</th>
<th>AuthorName</th>
<th>Date</th>
<th>Month</th>
<th>Year</th>
</tr>";

$counter=1;
while($row=mysqli_fetch_row($results)){
  
  if ( $counter>10 ){
    break;
  }
  echo "<tr>";
  echo "<td>" . $counter . "</td>";
  echo "<td>" . $row[0] . "</td>";
  echo "<td>" . $row[1] . "</td>";
  echo "<td>" . $row[2] . "</td>";
  echo "<td>" . $row[3] . "</td>";
  echo "<td>" . $row[4] . "</td>";
  echo "</tr>";
  $counter++;

}

echo "</table>";
}
mysqli_close($con);
?>
</body>
</html>