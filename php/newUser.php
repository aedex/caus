<?php
    echo 'welcome';
            
    $username = filter_input(INPUT_POST, "username");
    $email = filter_input(INPUT_POST, "email");
    $pass1 = filter_input(INPUT_POST, "pass1");
    $pass2 = filter_input(INPUT_POST, "pass2");
    
    echo $username.$email.$pass1.$pass2;
        
?>