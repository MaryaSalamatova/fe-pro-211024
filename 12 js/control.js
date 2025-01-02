let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
  let uppercaseLetters = textStr.match(/[A-Z]/g);
  console.log(uppercaseLetters);
  
  let operation = "5 плюс 7 = 3";
  let numbers = operation.match(/\d+/g).map(Number);
  console.log(numbers);
  
  let fiveLetterWords = textStr.match(/\b\w{5}\b/g);
  console.log(fiveLetterWords);