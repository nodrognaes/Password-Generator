// Assignment Code
var specialChars = ",./<>?;':{}-_=+!@#$%^&*()".split("");
var numberArray = "123456789".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//function to promp the user for password options
function getPassword() {
  var options = {};
  //create var to store length of password
  var length = parseInt(
    prompt('How many characters would you like your password to be?')
  );
  //create conditional statement to check if pw lenght is actually a number
  if (Number.isNaN(length)) {
    alert('You must select a number of characters.');
    return null;
  }
  //conditional statement to check if pw is at least 8 char
  if (length < 8) {
    alert('Password length must be AT LEAST 8 characters.')
    return null;
  };
  //conditional statement to check if pw length is at least 128 char
  if (length > 128) {
    alert('Password length cannot be more than 128 characters.')
    return null;
  };
  options.length = length;

  //create confirmation prompts for the type of characters the user wants tp use in their password.
  var specialConfirm = prompt('Would you like to include special characters? Y/N');
  if (specialConfirm == "Y" ) {
    options.specialChars = specialChars;
  }
  else if (specialConfirm != "Y" && specialConfirm != "N") {
    alert("Please enter Y or N");
    return null;
  }

  var numberConfirm = prompt('Would you like to include numbers? Y/N');
  if (numberConfirm == "Y") {
    options.numberArray = numberArray;
  }  
  else if (numberConfirm != "Y" && numberConfirm != "N") {
    alert("Please enter Y or N");
    return null;
  }

  var lowerConfirm = prompt('Would you like to include lowercase letters? Y/N');
  if (lowerConfirm == "Y") {
    options.lowerCase = lowerCase;
  }
  else if (lowerConfirm != "Y" && lowerConfirm != "N") {
    alert("Please enter Y or N");
    return null;
  }
  var upperConfirm = prompt('Would you like to include uppercase letters? Y/N');
  if (upperConfirm == "Y") {
    options.upperCase = upperCase;
  }
  else if (upperConfirm != "Y" && upperConfirm != "N") {
    alert("Please enter Y or N");
    return null;
  }

  //create conditional statement to check if user included at least 1 of the char types. return user back to start 
  if (upperConfirm == "N" && lowerConfirm == "N" && numberConfirm == "N" && specialConfirm == "N") {
    alert("You must selct at least 1 character type.");
    return null;
  }
  return options;

};

// create a function for getting a random element from an array
function getRandomElement(arr) {
  var random = Math.floor(Math.random() * arr.length);
  // save them to a variable
  var rand = arr[random];

  return rand;
}

//create a function to generate pw with user input
function generatingPassword() {
  //set var to call getpassword function
  var options = getPassword();
  // variable to store the password as it is being concatenated
  var passResult = [];
  // create a variable to store the types of characters to include into the password
  var possibleChars = [];
// create a variable to store each type of guaranteed characters
  var guarChars = [];

//write condition that adds the array for special chars into array of possible chars based on user input
  if (options.specialChars) { 
    possibleChars = possibleChars.concat(specialChars);
  }
  if (options.lowerCase) { 
    possibleChars = possibleChars.concat(lowerCase);
  }
  if (options.upperCase) { 
    possibleChars = possibleChars.concat(upperCase);
  }
  if (options.specialChars) { 
    possibleChars = possibleChars.concat(numberArray);
  }

// create for loop to iterate over the password length from the options object,
  for (var i = 0; i < options.length; i++) {
    passResult[i] = getRandomElement(possibleChars);
  }
  passResult = passResult.join("");
  return passResult;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatingPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

