//console.log();

$(function(){
     $("#userField").focus();
     var userAJCheckTO = 0;
         emailCheckTO = 0;

         validUser = false;
         validEmail = false;



    hasWhiteSpace = function(input){
        return /\s/g.test(input);
    };
    
    isValidEmail = function(input){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input);
    };
    
    $("#userField").on('input',function(){
        var $userField = $(this);
            inUserName = $userField.val();
            $availText = $("#userAvailText");
        if(inUserName.length > 3 && !hasWhiteSpace(inUserName)){
            
            clearTimeout(userAJCheckTO);
            userAJCheckTO = setTimeout(function(){
                console.log("Checking: " + inUserName);
                $.ajax({
                    url:"php/isValidUser.php",
                    type:"GET",
                    data: "user="+inUserName,
                    success:function(response){
                        console.log("valid username?:" + response);
                        if(!parseInt(response))
                        {
                            $availText.html(inUserName + " is Availalbe!").attr("class","avail");
                            validUser = true;

                        }else{
                            validUser = false;
                            $availText.html(inUserName + " is Taken").attr("class","taken");
                        }
     
                    }
                });
            },500);
        }else{
            $availText.html("Invalid username. (min 4 chars).").attr("class","taken");
        }
        
    });
    
    $("#emailField").on('input',function(){
        clearTimeout(emailCheckTO);
        setTimeout(function(){
            var $emailField = $("#emailField");
                $mailText = $("#validMailText");

            var inputEmail = $emailField.val();

            console.log("Validating email: " + inputEmail);


            if(!isValidEmail(inputEmail)){
                console.log("Invalid Email");
                validEmail = false;
                $mailText.html("Invalid Email").attr('class','taken');
                $emailField.focus();

            }else{
                validEmail = true;
                console.log("Valid email");
                $mailText.html("");
            }
        
        },700);
        
    });
    
    $("#signUpForm").submit(function(){
        console.log("User Valid:" + validUser);
        var $pass1F = $("#pass1Field");
            $pass2F = $("#pass2Field");
        
        var pass1 = $pass1F.val();
            pass2 = $pass2F.val();
        
        if(validUser && validEmail){
            if(pass1 === pass2)
            {
                return true;
            }else
            {
                
                $("#passText").html("Passwords do not match.").attr('class','taken');
                $pass1F.val('').focus();
                $pass2F.val('');
                return false;
            }
        }else{
            return false;
        }
        
    });
});