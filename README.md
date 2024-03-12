# Refactor Challenge

## Introduction
This repository contains the solution to the JavaScript Password Generator Refactor Challenge. The challenge involves modifying existing code to create an application that enables employees to generate random passwords based on criteria they've selected. The application runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code.

## Challenge Description
As an employee with access to sensitive data, the goal is to create a secure password generator that meets certain criteria. The application should allow users to select the length of the password and specify which character types (special characters, numeric characters, lowercase characters, and uppercase characters) to include. The generated password should match the selected criteria and provide greater security.

## Challenge Elements
### User Story
```markdown
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

### Acceptance Criteria
```markdown
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is displayed on the page
```

## Solution Overview
This challenge involves refactoring the existing JavaScript code to improve its structure, readability, and efficiency while maintaining its functionality. 
Key steps taken to address the challenge requirements include:

- Refactoring the getPasswordOptions function to handle user input validation more effectively and ensure at least one character type is selected.
- Created a variable to store length of password from user input
- Added conditional statements to check if entered password length is a number and 8 to 128 characters long.
- Created variables to store boolean regarding the inclusion of different character types.
- Added conditional statement to check if user does not include any types of characters.
- Added conditional statements that adds arrays of character types into array of possible characters based on user input.
- Added For loop to iterate over the password length, selecting random indices from the array of possible characters and concatenating those characters into the result variable.
- Added functionality to copy the generated password to the clipboard.
- Enhancing the code comments and documentation for better understanding and maintenance.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.
