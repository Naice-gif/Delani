$(document).ready(function(){
    $(".first").click(function(){
    $(".words").show();
    $(".first").hide();
   });
   $(".words").click(function(){
     $(".first").show();
     $(".words").hide();
    });
   
   $("#form").click(function(){
     var name = $("#name").val()
     var email = $("#mail").val()
     var message = $("#msg").val();
     if((name !== "") && (email !=="") && (message !=="")){
       alert(name + " " + "It is a pleasure to have you with us!")
     }
     else {
        alert("The form is empty");
     }
     event.preventDefault();
   });
   });
   