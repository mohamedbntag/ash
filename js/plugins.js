


$(function() {  


        /*-------------wow js---------------*/
        new WOW().init();

        /*--------------login---------------*/
        $("#signInBtn").on("click",function(){
            $(".signIn").fadeIn(1000);
            $(".login").fadeIn();
            $("body,html").height("100vh");
            $("body,html").width("100%");
            $("body,html").css("overflow", "hidden");      
            });

            $(".iconSub").on("click",function(){
                $(".signIn").fadeOut(1000, function(){
                    $(".login").fadeIn();
                    $(".otp,.forgetPass").hide();
                });
                $("body,html").height("auto");
                $("body,html").css("overflow", "auto"); 
            });

            $(".followSignIn").on("click",function(){
                $(".login").slideUp(1000);
                $(".otp").fadeIn(1000); 
            });

            $(".forgetBtn").on("click",function(){
                $(".login").slideUp(1000);
                $(".forgetPass").fadeIn(1000); 
            });
            
    /*----------------------start subscribe model---------------------*/

    $(".iconSub").on("click",function(){
        $(".subscribeModel").fadeOut(1000, function(){
            $(".newAccount").fadeIn();
            $(".conditions,.insertData,.addInfo,.congratulations").hide();
        });
        $("body,html").height("auto");
        $("body,html").css("overflow", "auto"); 
    });

        /*----------start first model newAccount*******/
        $(".subscribe").on("click",function(){
            $(".subscribeModel").fadeIn(1000);
            $(".newAccount").fadeIn();
            //$("body,html").height("100vh");
            //$("body,html").width("100%");
            //$("body,html").css("overflow", "hidden");           
            });

        /*--------followUp-newAccount button -----*/
        $(".followUp-newAccount").on("click",function(){
            $(".newAccount").slideUp(1000);
            $(".insertData").fadeIn(1000);         
        });
        $("#accept").on("click",function(){
            $(".newAccount").slideUp(1000);
            $(".conditions").fadeIn(1000);         
            });

        /*----------end  model newAccount*******/

        /*----------start  model conditions*******/
 
        $(".backConditions").on("click",function(){
            $(".conditions").fadeOut(1000, function(){
                $(".newAccount").slideDown(1000);         
            });
        });    
        $(".followUp2").on("click",function(){
            $(".insertData").slideUp(1000);
            $(".addInfo").fadeIn(1000);      
        });

        /*----------start  model4 Add Info*******/
        $(".followUp3").on("click",function(){
            $(".addInfo").slideUp(1000);
            $(".congratulations").fadeIn(1000);      
        });

        /*----------start  model5 congratulations*******/

       

            
            

        
    /*--------------end subscribe model---------------*/

  });



        