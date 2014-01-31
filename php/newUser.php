<?php
    include 'CausDb.php';
            
    $username = filter_input(INPUT_POST, "username");
    $email = filter_input(INPUT_POST, "email");
    $pass = filter_input(INPUT_POST, "pass1");
    
    $query = "INSERT INTO USERS (USERID, EMAIL,PASSWORD)"
            ."VALUES ('".$username."','".$email."','".$pass."')";
    
    $db = new CausDb($query);
    
    //
    if(!$db->run())
    {
        echo 'Welcome to CAUS '.$username;
        
    }else{
        echo 'Registration Failed';
    }
    
    
    

        
?>