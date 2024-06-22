function countVowels(str) {
    // Convert the string to lowercase to simplify the matching process
    str = str.toLowerCase();
    
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Initialize a variable to count the number of vowels
    let count = 0;
    
    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            // If it is, increment the count
            count++;
        }
    }
    
    // Return the total count of vowels
    return count;
}

// Example usage:
const str = "Hello World";
console.log("Number of vowels:", countVowels(str)); // Output: 3
