var leetspeak = function(input){
  var inputArray = input.split('');
  var newWord;

  for (var i=0; i<=inputArray.length; i++) {
    if (inputArray[i] === "e") {
      inputArray[i] = "3";
    } else if (inputArray[i] === "o") {
      inputArray[i] = "0";
    } else if (inputArray[i] === "I") {
      inputArray[i] = "1";
    } else if (inputArray[i] === "t") {
      inputArray[i] = "7";
    } else if (inputArray[i+1] === "s") {
      inputArray[i+1] = "z";
    }


    // for debugging purposes
    // console.log(inputArray[i]);
    newWord = inputArray.join('');
    // for debugging purposes
    // console.log(newWord);
  }
  return(newWord);
};
