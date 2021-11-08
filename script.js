var email= document.getElementById("email");
var error =document.getElementById("error");
var error1 =document.getElementById("error1");
var error2 =document.getElementById("error2");
var phn=document.getElementById("phn");
var myInput = document.getElementById("psw");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3= document.getElementById("block3");
var inputEmail4=document.getElementById("inputEmail4")
var inputPassword4=document.getElementById("inputPassword4")
var error3=document.getElementById("error3");
var error4 =document.getElementById("error4");


// When the user clicks on the password field, show the message box // adding atribute onfocus on pwd field 
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-zA-Z0-9]{1,}/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    block1.style.display="inline-block"
    // letter.classList.add("valid");
  } else {
    block1.style.display="none"
    // letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Za-z0-9]{4,}/g;
  if(myInput.value.match(upperCaseLetters)) {  
    block2.style.display="inline-block"
    // capital.classList.add("valid");
  } else {
    block2.style.display="none"
    // capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,}/g;
  if(myInput.value.match(numbers)) {  
    block3.style.display="inline-block"
    number.classList.add("valid");
  } else {
    block3.style.display="none"
    number.classList.add("invalid");
  }
  
  
}
function validation(){
    // alert("hi")
    
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ // Email
    let regexp2=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ //phone number
    let regexp3=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //pasword

    if(regexp.test(email.value) && regexp2.test(phn.value) && regexp3.test(myInput.value)){
alert("Successfuly Accout Created ")
        error.innerHTML="validate";
        error1.innerHTML="validate";
        email.value="";
        phn.value="";
        return true;
       
        
    }
   
    
    else{
        error.innerHTML="invalid"
        error1.innerHTML="invalid"
        error2.innerHTML="invalid"
        email.style.border="2px solid red";
        phn.style.border="2px solid red"
        myInput.style.border="2px solid red"
      return false
    }
}

function validation1(){
    // alert("hi")
    
    let regexp4 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ // Email
    let regexp5=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if(regexp4.test(inputEmail4.value) && regexp5.test(inputPassword4.value) ){
alert("Successfuly loged in ")
        error3.innerHTML="validate";
        error4.innerHTML="validate";
        inputEmail4.value="";
        inputEmail4.value="";
        return true;
       
        
    }
   
    
    else{
        error3.innerHTML="invalid"
        error4.innerHTML="invalid"
        inputEmail4.style.border="2px solid red";
        inputPassword4.style.border="2px solid red"
        
      return false
    }
}