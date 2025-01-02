// PUSH
let array1 = [];
array1.push(1, 2, 3, "hello", true);
console.log("Масив після використання push:", array1);


function addElementToArray(arr, element) {
  arr.push(element);
}
let array2 = [1, 2, 3];
addElementToArray(array2, 4);
console.log("Масив після додавання елемента через функцію:", array2);

// POP
let array3 = [1, 2, 3, 4, 5];
let removedElement = array3.pop();
console.log("Масив після використання pop:", array3);
console.log("Видалений елемент:", removedElement);


function removeLastElement(arr) {
  return arr.pop();
}
let array4 = [10, 20, 30];
let lastElement = removeLastElement(array4);
console.log("Масив після видалення останнього елемента через функцію:", array4);
console.log("Видалений елемент:", lastElement);

// UNSHIFT
let array5 = [3, 4, 5];
array5.unshift(1, 2);
console.log("Масив після використання unshift:", array5);


function addElementToStart(arr, element) {
  arr.unshift(element);
}
let array6 = [20, 30, 40];
addElementToStart(array6, 10);
console.log("Масив після додавання елемента в початок через функцію:", array6);

// SHIFT
let array7 = [1, 2, 3, 4];
let shiftedElement = array7.shift();
console.log("Масив після використання shift:", array7);
console.log("Видалений перший елемент:", shiftedElement);

function removeFirstElement(arr) {
  return arr.shift();
}
let array8 = [50, 60, 70];
let firstElement = removeFirstElement(array8);
console.log("Масив після видалення першого елемента через функцію:", array8);
console.log("Видалений елемент:", firstElement);

// FILL
let array9 = new Array(5);
array9.fill("A");
console.log("Масив після використання fill:", array9);


function fillArray(arr, value, start, end) {
  return arr.fill(value, start, end);
}
let array10 = [1, 2, 3, 4, 5];
fillArray(array10, 0, 1, 4);
console.log("Масив після заповнення через функцію:", array10);

// Функція для сортування, заміни перших трьох елементів значенням 10
function sortAndReplace(array) {
  array.sort((a, b) => b - a);
  array.fill(10, 0, 3);
  return array;
}
let array11 = [5, 2, 9, 1, 7, 3];
let modifiedArray = sortAndReplace(array11);
console.log("Масив після сортування та заміни перших трьох елементів:", modifiedArray);

