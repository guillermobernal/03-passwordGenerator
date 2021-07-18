// Assignment code here
var passwordLength = 0; 
var passwordLower = "y";
var passwordUpper = "y";
var passwordNumbers = "y";
var passwordSpecial = "y";

function generatePassword (){
  var randomPassword = "";
  passwordLength = window.prompt ("How many characters do you want in your password? (8-128)");
  passwordLower = window.prompt ("Do you want lower case letters? (Y/N)");
  passwordLower = passwordLower.toLowerCase();
  passwordUpper = window.prompt ("Do you want upper case letters? (Y/N)");
  passwordUpper = passwordUpper.toLowerCase();
  passwordNumbers = window.prompt ("Do you want numbers? (Y/N)");
  passwordNumbers = passwordNumbers.toLowerCase();
  passwordSpecial = window.prompt ("Do you want special characters? (Y/N)");
  passwordSpecial = passwordSpecial.toLowerCase();

  if (passwordLength >=8 && passwordLength <= 128) {
      if (passwordLower == "y" || passwordNumbers == "y" || passwordUpper == "y" || passwordSpecial =="y"){
      
        var pool = "";
        var charactersLength = pool.length;

        if(passwordLower == "y"){
          pool += "abcdefghijklmnopqrstuvwxyz";
        }
        if (passwordUpper == "y"){
          pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (passwordNumbers == "y"){
          pool += "0123456789";
        }
        if (passwordSpecial == "y"){
          pool += "!@#$%^&*()_+";
        }

        for ( var i = 0; i < length; i++ ) {
          randomPassword += pool.charAt(Math.floor(Math.random() * charactersLength));
       }
       return randomPassword+;
      }
      else {
        alert("Try again please select Y at least once ");
      }
    }
  
  else {
    alert("Try again Please Pick a number between 8-128");
  }


}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
