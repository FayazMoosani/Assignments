function square(number) {
    // Ensure the input is a valid number
    if (typeof number !== 'number') {
        return "Input is not a valid number.";
    }
    
    // Calculate and return the square
    return number * number;
}

var result = square(5);
console.log(result); // Output will be 25
