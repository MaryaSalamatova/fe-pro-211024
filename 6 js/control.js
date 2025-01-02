class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const person = new Person("John", 30);
  console.log(person);
  

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello! My name is ${this.name}.`);
    }
  }
  
  const Person = new Person("John", 30);
  person.sayHello(); 
 
  
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    study() {
      console.log(`${this.name} studing.`);
    }
  }
  
  const student = new Student("Alice", 20, "S12345");
  student.sayHello();
  student.study();
  console.log(student);
  
//Math.min and Math.max
  function findMin(a, b) {
    return Math.min(a, b);
  }
  console.log(findMin(5, 10));

  
  function findMax(a, b) {
    return Math.max(a, b);
  }
  console.log(findMax(5, 10));
  

//Math.pow
  function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  console.log(power(2, 3));

//Math.floor and Math.ceil
  function roundDown(number) {
    return Math.floor(number);
  }
  console.log(roundDown(4.7));
 
  
  function roundUp(number) {
    return Math.ceil(number);
  }
  console.log(roundUp(4.1));
 

//Date.getYear
  function calculateBirthYear(age) {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
  }
  
  console.log(calculateBirthYear(25));
  

//Date.toLocaleString
const now = new Date();
console.log(now.toLocaleString());


//String.split and toUpperCase
const sentence = "hello world this is javascript";
const words = sentence.split(" ");
const upperCaseWords = words.map(word => word.toUpperCase());

console.log(words);
console.log(upperCaseWords);