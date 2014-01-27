<?php
    $userName = filter_input(INPUT_GET, "user");
    
    $con = mysqli_connect("localhost","root","root","causdb");
    if(!mysqli_connect_errno()){
        //error connect
    }
    
    $qry = "select * from users where userid =\"$userName\"" ;
        
    
    $result = mysqli_query($con,$qry);
    
    echo $result->num_rows;
    
    mysqli_close($con);
    
?>