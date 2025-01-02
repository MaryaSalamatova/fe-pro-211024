//SPLICE
let array1 = [1, 2, 3, 4, 5, 6];
array1.splice(2, 2);
console.log("Масив після видалення елементів:", array1);


function removeElements(arr, index, count) {
  arr.splice(index, count);
}
let array2 = [10, 20, 30, 40, 50];
removeElements(array2, 1, 2);
console.log("Масив після використання функції:", array2);

//MAP
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num ** 2);
console.log("Масив квадратів чисел:", squares);


function transformArray(arr, transformer) {
  return arr.map(transformer);
}
let transformedArray = transformArray([10, 20, 30], value => `Value: ${value}`);
console.log("Трансформований масив:", transformedArray);

//FILTER
let array3 = [1, 2, 3, 4, 5, 6];
let evenNumbers = array3.filter(num => num % 2 === 0);
console.log("Масив парних чисел:", evenNumbers);


function filterArray(arr, condition) {
  return arr.filter(condition);
}
let filteredArray = filterArray([10, 15, 20, 25], num => num > 15);
console.log("Відфільтрований масив:", filteredArray);

//LET CONST
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  

  const message = 'test';
  function example() {
    if (true) {
      const message = 'Hello, world!';
      console.log(message);
    }
    console.log(message);
  }
  example();
  
  //FOR...IN
  const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer',
  };
  
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }  

  //FOR...IN FOR...OF
  const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' },
  ];
  
  
  for (const student of students) {
    console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
  }
  
  
  for (const index in students) {
    console.log(`Student ${Number(index) + 1}:`);
    for (const key in students[index]) {
      console.log(`${key}: ${students[index][key]}`);
    }
  }
  