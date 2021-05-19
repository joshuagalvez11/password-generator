var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2" , "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["~", "'", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "[", "}", "]", "|", ":", ";", "<", ",", ">", "?", "/"];
var passwordCharType = [];
var password = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  var numTotal = parseInt(prompt("How many long would you like your password(8-128)"));
  passwordCharType = [];
  password = [];

  if(numTotal > 128 || numTotal < 8){
    alert("Must enter number between 8-128");
  } else{
    var numLower = parseInt(prompt("How many lowercase characters"));
    var numUpper = parseInt(prompt("How many uppercase characters"));
    var numNumeric = parseInt(prompt("How many numeric characters"));
    var numSpecial = parseInt(prompt("How many special characters"));

    if(numTotal == (numLower + numUpper + numNumeric + numSpecial) ){

    }else if(numTotal > (numLower + numUpper + numSpecial + numNumeric) ){
      alert("Rest of characters will be filled with Upper and Lower case letters");
    }else if(numTotal < (numLower + numUpper + numSpecial + numNumeric)){
      alert("Individual Characters exceed requested password length");
    }


    //create array of password charcter char types neccesary
    for(var i = 0; i < numTotal; i++){
      if(i < numSpecial){
        passwordCharType.push('4');
      }else if(i < (numSpecial + numNumeric)){
        passwordCharType.push('3')
      }else if(i < (numSpecial + numNumeric + numUpper)){
        passwordCharType.push('2');
      }else if(i < (numSpecial + numNumeric + numUpper + numLower)){
        passwordCharType.push('1');
      }else{
        if(Math.floor(Math.random() * 2) >= 1){
          passwordCharType.push('1');
        }else{
          passwordCharType.push('2');
        }
      }
    }

    //using char types array get random char value into array
    for(var i = 0; i < numTotal; i++){
      if(passwordCharType[i] === '1'){
        password.push(lower[Math.floor(Math.random() * 26)]);
      }else if(passwordCharType[i] === '2'){
        password.push(upper[Math.floor(Math.random() * 26)]);
      }else if(passwordCharType[i] === '3'){
        password.push(numeric[Math.floor(Math.random() * 10)]);
      }else if(passwordCharType[i] === '4'){
        password.push(special[Math.floor(Math.random() * 26)]);
      }
    }

    //randomize array order
    var tempPassword = password;
    var newPassword = [];
    for(var i = 0; i < numTotal; i++){
      var remove = Math.floor(Math.random() * tempPassword.length);
      newPassword.push(tempPassword[remove]);
      tempPassword.splice(remove, 1);
    }
    password = newPassword;
  }

  var strPass = password.join("");
  return strPass;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
