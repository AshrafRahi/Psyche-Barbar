document.getElementById("registerBtn").addEventListener('click', function(){

var emailfield = document.getElementById("emailField").value;
var emailPattern = /((cse|eee|thm|civil|bba|ih|english)_\d{10}@lus\.ac\.bd)/ 

if(!emailfield.match(emailPattern)){
    document.getElementById("femail").innerHTML="Invalid Email";
    return false;  
  }
  else{
    document.getElementById("femail").innerHTML="";
  }



  var password = document.getElementById("passField").value;
  var passPattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/ //Password Regex

  if(!password.match(passPattern)){
    document.getElementById("pass").innerHTML="Put Digit,Special Cha & length 7-15";
    return false;  
  }
  else{
    document.getElementById("pass").innerHTML="";
  }

});