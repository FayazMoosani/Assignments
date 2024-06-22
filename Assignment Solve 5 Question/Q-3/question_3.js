function firstNonRepeatedCharacter(str) {
    // Create an empty object to store character counts
    var charCount = {};

    // Iterate through the string and count occurrences of each character
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        // If the character is already in the charCount object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // Otherwise, initialize its count to 1
            charCount[char] = 1;
        }
    }

    // Iterate through the string again to find the first character with count 1
    for (var j = 0; j < str.length; j++) {
        var char = str.charAt(j);
        // If the count of the character is 1, return it
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Example usage:
var str = "programming";
console.log(firstNonRepeatedCharacter(str)); // Output: "p"
