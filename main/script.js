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
    
  
    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
   
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    
  
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    
  
    // Variable to store boolean regarding the inclusion of special characters
  
  
    // Variable to store boolean regarding the inclusion of numeric characters
    
  
    // Variable to store boolean regarding the inclusion of lowercase characters
    v
  
    // Variable to store boolean regarding the inclusion of uppercase characters
    var hasUpperCasedCharacters = confirm(
      'Click OK to confirm including uppercase characters.'
    );
  
    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    
  
    // Object to store user input
    var passwordOptions = {
      length: length,
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
    // Push new random special character to guaranteedCharacters
    
  
    // Conditional statement that adds array of numeric characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    
    // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
    // Push new random lower-cased character to guaranteedCharacters
    
  
    // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
    // Push new random upper-cased character to guaranteedCharacters
    
  
    // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    
  
    // Mix in at least one of each guaranteed character in the result
    
  
    // Transform the result into a string and pass into writePassword
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
  
  