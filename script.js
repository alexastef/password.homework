var generateBtn = document.querySelector("#generate");
var alphaCapital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","_","+"];
var choicesArray = [];



// Write password to the #password input
function writePassword() {
  var passwordString = generatePassword();    

  var passwordText = document.querySelector("textarea");

  passwordText.value = passwordString;


};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generatePassword function
function generatePassword() {  
  //User is prompted after clicking "Generate Password" button, then is directed through series of confirm/cancel options
  var passwordLength = parseInt(prompt("How many characters would you like your password to include? Choose between 8 and 128.")); {
    if (passwordLength < 8 || passwordLength > 128) {
      parseInt(prompt("You must choose a value between 8 and 128."));
    } else {
      passwordCapital = confirm("Would you like your password to contain capital letters?");
      passwordLower = confirm("Would you like your password to contain lowercase letters?");
      passwordNos = confirm("Would you like your password to contain numbers?");
      passwordSymbols = confirm("Would you like your password to contain special characters?");
    };

    if (passwordCapital === true) {
        choicesArray = choicesArray.concat(alphaCapital)
    }

    if (passwordLower === true) {
       choicesArray = choicesArray.concat(alphaLower)
    }

    if (passwordNos === true) {
        choicesArray = choicesArray.concat(numbers)

    }

    if (passwordSymbols === true) {
        choicesArray = choicesArray.concat(symbols)


    };

    var password = [];
    console.log(passwordLength);
    console.log(choicesArray);

    for (var i = 0; i < passwordLength; i++) {
        
      var passwordCharacter = choicesArray[Math.floor(Math.random()* choicesArray.length)];
    
      password.push(passwordCharacter)
            
        event.preventDefault();
         
    }

    var passwordString = password.join("");
    console.log(passwordString);
    return(passwordString);
}};
