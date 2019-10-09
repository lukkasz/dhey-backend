module.exports = function encodeString(inputString) {
  let encodedInput= '';
  let counter = 1;
  
  for(let i = 0; i < inputString.length; i++) {
    let nextChar = inputString.charAt(i+1);
    let currentChar = inputString.charAt(i);
    
    if (nextChar === currentChar) {
      counter += 1;
    } else {
      encodedInput += (currentChar + counter);
      counter = 1;
    }
  }

  return encodedInput

}

