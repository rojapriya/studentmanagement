<?php

$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection, 'stu');

if(isset($_POST['insertdata']))
{
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $location = $_POST['location'];
    $email = $_POST['email'];
    $dob = $_POST['dob'];
    $education = $_POST['education'];

    $query = "INSERT INTO stddetails (`firstname`,`lastname`,`location`,`email`,`dob`,`education`) VALUES ('$firstname','$lastname','$location','$email','$dob','$education')";
    $query_run = mysqli_query($connection, $query);

    if($query_run)
    {
        echo '<script> alert("Data Saved"); </script>';
        header('Location: index.php');
    }
    else
    {
        echo '<script> alert("Data Not Saved"); </script>';
    }
}

?>