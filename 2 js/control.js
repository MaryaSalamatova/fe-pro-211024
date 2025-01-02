let number1 = 5;
let number2 = 5; 
alert(number1 === number2 ? "Числа рівні" : "Числа не рівні");

let inputNumber = prompt("Введіть число:");
if (inputNumber !== null) {
  let isEven = inputNumber % 2 === 0;
  console.log(isEven ? "Число парне" : "Число непарне");
}

let age = prompt("Введіть ваш вік:");
if (age !== null) {
  age = parseInt(age);
  if (isNaN(age)) {
    console.log("Будь ласка, введіть коректний вік!");
  } else {
    alert(age < 18 ? "Вам не можна використовувати цей ресурс" : "Вам можна використовувати цей ресурс");
  }
}

let price = prompt("Введіть ціну товару:");
let quantity = prompt("Введіть кількість товару:");
if (price !== null && quantity !== null) {
  let totalCost = parseFloat(price) * parseInt(quantity);
  console.log(`Загальна вартість товару: ${totalCost}`);
}

let productCost = prompt("Введіть вартість товару:");
if (productCost !== null) {
  let discount = parseFloat(productCost) * 0.5;
  alert(`Сума знижки: ${discount}`);
}

let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
let num3 = prompt("Введіть третє число:");
if (num1 !== null && num2 !== null && num3 !== null) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num3 = parseFloat(num3);
  let maxNum = Math.max(num1, num2, num3);
  console.log(`Найбільше число: ${maxNum}`);
}

let month = prompt("Введіть номер місяця (від 1 до 12):");
if (month !== null) {
  month = parseInt(month);
  let season;
  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "Зима";
      break;
    case 3:
    case 4:
    case 5:
      season = "Весна";
      break;
    case 6:
    case 7:
    case 8:
      season = "Літо";
      break;
    case 9:
    case 10:
    case 11:
      season = "Осінь";
      break;
    default:
      season = "Некоректний номер місяця!";
  }
  console.log(`Цей місяць належить до сезону: ${season}`);
}

let number = prompt("Введіть число:");
if (number !== null) {
  number = parseFloat(number);
  if (isNaN(number)) {
    console.log("Це не число!");
  } else if (number > 0) {
    console.log("Число додатнє");
  } else if (number < 0) {
    console.log("Число від'ємне");
  } else {
    console.log("Це нуль");
  }
}