// DOM ELEMENTS
var generateBtn = document.querySelector("#generate");

var bigChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var smallChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];;
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "~", "<", ">", ".", "?", "/"];

// Alerts Functions

function givemeaPassword() {
  var passLong = prompt("How long would you like your password to be? choose wisely it can only be between 8-128 characters:");
  if (Number.isNaN(passLong)) {
    alert("Must have a numeric VALUE")
    return;
  }
  if (passLong > 128) {
    alert("Oops to big try again :(");
    return;
  }
  if (passLong < 8) {
    alert("Oops to small try again :(");
    return;
  }
  var hasSpecialChar = confirm("Click OK");
  var hasNumChar = confirm("Click OK");
  var hasSmallChar = confirm("Click OK");
  var hasBigChar = confirm("Click OK");
  
  if (hasSpecialChar) {
  }else if (hasNumChar) {
  }else if (hasSmallChar) {
  }else if (hasBigChar) {
  }else {
    alert("MUST CLICK AT LEAST ONE")
  }
  var passwordChoice = {
    length: length,
    hasSpecialChar: hasSpecialChar,
    hasNumChar: hasNumChar,
    hasSmallChar: hasSmallChar,
    hasBigChar: hasBigChar
  };
  return passwordChoice; 
}

function pickRandom(arr) {
  var pickrandInd = Math.floor(Math.random() * arr.length);
  var pickrandEl = arr[pickrandInd];
  return; pickrandEl;
}



function generatePassword() {
  var options = givemeaPassword();
  var currentArr = new Array()
  if (options.hasSpecialChar) {
    currentArr= currentArr.concat(specialChar)
  }
  if (options.hasNumChar) {
    currentArr= currentArr.concat(numChar)
  }
  if (options.hasSmallChar) {
    currentArr= currentArr.concat(smallChar)
  }
  if(options.hasBigChar) {
    currentArr= currentArr.concat(bigChar)
  }
  console.log(currentArr)

  let pass = " "
  let i = 0 
  while (i < options.length) {
    pass += getRandom(currentArr);
    i++ 
  } 
  return pass
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

 }

  //Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  generateBtn = addEventListener("click", generatePassword);
