var leetspeak = function(input){
  var inputArray = input.split('');
  var leetWord;

  for (var i=0; i<=inputArray.length; i++) {
    if (inputArray[i] === "e") {
      inputArray[i] = "3";
    } else if (inputArray[i] === "o") {
      inputArray[i] = "0";
    } else if (inputArray[i] === "I") {
      inputArray[i] = "1";
    } else if (inputArray[i] === "t") {
      inputArray[i] = "7";
    } else if ((i !== 0) && (inputArray[i] === "s")) {
      inputArray[i] = "z";
    }

  }
  leetWord = inputArray.join('');
  return(leetWord);
};
