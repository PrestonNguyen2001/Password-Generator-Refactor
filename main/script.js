// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  
  // Function to prompt user for password options
  function getPasswordOptions() {

    // Variable to store length of password from user input
    var passwordLength = prompt("Enter Password Length Between 8 and 128 characters")
  
    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (isNaN(passwordLength)) {
        alert("Password length must be a number.");
        return null;
    }
    passwordLength = parseInt(passwordLength.trim());
      
    // Conditional statement to check if password length is at least 8 characters and is less than 128 characters long. Prompts end if this evaluates false
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid password length between 8 and 128 characters");
        return "";
    }
  
    // Variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm("Include special characters?");
  
    // Variable to store boolean regarding the inclusion of numeric characters
    var hasNumericCharacters = confirm("Include numbers?");
  
    // Variable to store boolean regarding the inclusion of lowercase characters
    var hasLowerCasedCharacters = confirm("Include lowercase characters?");
  
    // Variable to store boolean regarding the inclusion of uppercase characters
    var hasUpperCasedCharacters = confirm(
      'Click OK to confirm including uppercase characters.'
    );
  
    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if (!hasLowerCasedCharacters && !hasUpperCasedCharacters && !hasNumericCharacters && !hasSpecialCharacters) {
        alert("Please select at least one character type");
        return "";
      }
  
    // Object to store user input
    var passwordOptions = {
      length: passwordLength,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters,
    };
  
    return passwordOptions;
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
  // Function to generate password with user input
  function generatePassword() {
    var options = getPasswordOptions();
    // Variable to store password as it's being concatenated
    var result = [];
  
    // Array to store types of characters to include in password
    var possibleCharacters = [];
  
    // Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];
  
    // Check if an options object exists, if not exit the function
    if (!options) return null;
  
    // Conditional statement that adds array of special characters into array of possible characters based on user input
    if (options.hasSpecialCharacters) possibleCharacters = possibleCharacters.concat(specialCharacters);
    // Push new random special character to guaranteedCharacters
    if (options.hasSpecialCharacters) guaranteedCharacters.push(getRandom(specialCharacters));
   
    // Conditional statement that adds array of numeric characters into array of possible characters based on user input
    if (options.hasNumericCharacters) possibleCharacters = possibleCharacters.concat(numericCharacters);
    // Push new random numeric character to guaranteedCharacters
    if (options.hasNumericCharacters) guaranteedCharacters.push(getRandom(numericCharacters));
    
    
    // Conditional statement that adds array of lowercase characters into array of possible characters based on user input 
    if (options.hasLowerCasedCharacters) possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    // Push new random lower-cased character to guaranteedCharacters
    if (options.hasLowerCasedCharacters) guaranteedCharacters.push(getRandom(lowerCasedCharacters));

    // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
    if (options.hasUpperCasedCharacters) possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    // Push new random upper-cased character to guaranteedCharacters
    if (options.hasUpperCasedCharacters) guaranteedCharacters.push(getRandom(upperCasedCharacters));
    
    
   // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = guaranteedCharacters.length; i < options.length; i++) {
        var randomChar = getRandom(possibleCharacters);
        result.push(randomChar);
    }

    // Mix in at least one of each guaranteed character in the result
    result = result.concat(guaranteedCharacters);

    // Transform the result into a string and pass into writePassword
    result = result.join('');
    return result;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
  