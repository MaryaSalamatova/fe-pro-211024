let start = 1;
let end = 20;
let sum = 0;
let i = start;

while (i <= end) {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
}
console.log(`Сума всіх парних чисел від ${start} до ${end}: ${sum}`);

let number = 5;
console.log(`Таблиця множення для числа ${number}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log("Зворотний лічильник від 10 до 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let inputNumber = parseInt(prompt("Введіть число для перевірки:"));
if (!isNaN(inputNumber)) {
  for (let i = inputNumber; i <= inputNumber; i++) {
    console.log(i % 2 === 0 ? `${i} є парним` : `${i} є непарним`);
  }
} else {
  console.log("Введено некоректне число!");
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "На нуль ділити не можна!";
  }
  return a / b;
}

let operation = prompt("Введіть математичну операцію (+, -, *, /):");
let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));

switch (operation) {
  case "+":
    console.log(`Результат: ${add(num1, num2)}`);
    break;
  case "-":
    console.log(`Результат: ${subtract(num1, num2)}`);
    break;
  case "*":
    console.log(`Результат: ${multiply(num1, num2)}`);
    break;
  case "/":
    console.log(`Результат: ${divide(num1, num2)}`);
    break;
  default:
    console.log("Невірний оператор!");
}

function multiplyValues(a, b, c) {
  return a * b * c;
}
console.log(multiplyValues(2, 3, 4));