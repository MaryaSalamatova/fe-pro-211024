//SPREAD
function mergeArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    console.log("Об'єднаний масив:", mergedArray);
    return mergedArray;
  }
  mergeArrays([1, 2, 3], [4, 5, 6]);
  
  
//REST
function displayStringAndArgs(str, ...args) {
    console.log("Рядок:", str);
    console.log("Масив аргументів:", args);
  }
  displayStringAndArgs("Привіт", 1, 2, 3, 4, 5);

  
  function calculateAverage(...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    console.log("Середнє значення:", average);
    return average;
  }
  calculateAverage(10, 20, 30, 40);
  
//TYPEOF
function checkType(value) {
    console.log("Тип аргументу:", typeof value);
  }
  checkType(123);
  checkType("Hello");
  checkType(true);
 
  
  function identifyType(value) {
    if (typeof value === "number") {
      console.log("Це число");
    } else if (typeof value === "string") {
      console.log("Це рядок");
    } else {
      console.log("Це інший тип");
    }
  }
  identifyType(123);
  identifyType("Привіт");
  identifyType(true);
  