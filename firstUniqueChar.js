
const firstUniqueChar = (s) =>{

    // Create a map to store the count of each character in the string
  const charC = new Map();

  // Iterate through the string and count the occurrences of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charC.set(char, (charC.get(char) || 0) + 1);
  }

  // Iterate through the string again and find the first character with count 1
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charC.get(char) === 1) {
      return i
    }
}

// If no non-repeating character found, return -1 
return -1

};


var s = "lsklds" 
console.log(firstUniqueChar(s))
