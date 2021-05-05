// Assignment Code
// special chars array
var specialChars = [",", "#"];

//number array
var numberArray = ["1", "2",];

//lower case array
var lowerCase = ["a", "b",];

//upper case array
var upperCase = ["ABCD"].split();

//function to promp the user for password options
function getPassword() {
  //create var to stor length of password
  var length = parseInt(
    prompt('How mant characters would you like your password to be?')
  );
  //create conditional statement to check if pw lenght is actually a number
  if (Number.isNaN(lenght)) {
    alert('pw must be a number');
    return null;
  }
  //conditional statement to check if pw is at least 8 char
  if (lenght < 8) {
    alert('Password length must be AT LEAST 8 characters.')
    return null;
  };
  //conditional statement to check if pw length is at least 128 char
  if (lenght > 128) {
    alert('Password length cannot be more than 128 characters.')
    return null;
  };
};


//create confirmation prompts for the type of characters the user wants tp use in their password.

//create conditional statement to check if user included at least 1 of the char types. return user back to start 


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
