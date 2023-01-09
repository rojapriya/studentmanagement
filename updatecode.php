<?php
$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection, 'stu');

    if(isset($_POST['updatedata']))
    {   
        $id = $_POST['update_id'];
        
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $location = $_POST['location'];
        $email = $_POST['email'];
        $dob = $_POST['dob'];
        $education = $_POST['education'];

        $query = "UPDATE stddetails SET firstname='$firstname', lastname='$lastname', location='$location', email='$email', dob = '$dob',education = '$education' WHERE id='$id'  ";
        $query_run = mysqli_query($connection, $query);

        if($query_run)
        {
            echo '<script> alert("Data Updated"); </script>';
            header("Location:index.php");
        }
        else
        {
            echo '<script> alert("Data Not Updated"); </script>';
        }
    }
?>