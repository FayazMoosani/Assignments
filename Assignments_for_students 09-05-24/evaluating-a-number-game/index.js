// Import readline module for taking input from the user
import * as readline from 'readline';
// Function to create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Generate a dynamic number (for example, a random number between 1 and 100)
const dynamicNumber = Math.floor(Math.random() * 100) + 1;
// Function to compare the entered number with the dynamic number
const compareNumbers = (enteredNumber, dynamicNumber) => {
    if (enteredNumber > dynamicNumber) {
        return 'greater than';
    }
    else if (enteredNumber < dynamicNumber) {
        return 'less than';
    }
    else {
        return 'equal to';
    }
};
// Prompt the user to enter a number
rl.question('Please enter a number: ', (input) => {
    const enteredNumber = parseFloat(input);
    if (isNaN(enteredNumber)) {
        console.log('Invalid input. Please enter a valid number.');
    }
    else {
        const result = compareNumbers(enteredNumber, dynamicNumber);
        console.log(`The entered number is ${result} the dynamic number (${dynamicNumber}).`);
    }
    // Close the readline interface
    rl.close();
});
// CODE WITH FM => FAYAZ MOOSANI
