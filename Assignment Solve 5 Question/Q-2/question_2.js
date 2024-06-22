function isPrime(num, divisor = 2) {
    // Base cases
    if (num <= 2) {
        return (num === 2);
    }
    if (num % divisor === 0) {
        return (num === divisor);
    }
    
    // Recursive case
    return isPrime(num, divisor + 1);
}

// Test the function
console.log(isPrime(17)); // true
console.log(isPrime(24)); // false
