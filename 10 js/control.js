const { topPosition, step, gameField, player, leftPosition } = require("./minigame");

// Завдання 1: Зміна кольору при наведенні
const colorBox = document.getElementById('colorBox');
colorBox.addEventListener('mouseover', () => {
  colorBox.style.backgroundColor = 'lightblue';
});
colorBox.addEventListener('mouseout', () => {
  colorBox.style.backgroundColor = 'lightgray';
});

// Завдання 2: Зміна стилю зображення при наведенні
const image = document.getElementById('image');
image.addEventListener('mouseover', () => {
  image.style.transform = 'scale(1.2)';
  image.style.filter = 'brightness(1.2)';
});
image.addEventListener('mouseout', () => {
  image.style.transform = 'scale(1)';
  image.style.filter = 'brightness(1)';
});

// Конвертер валют
const amountInput = document.getElementById('amount');
const rateInput = document.getElementById('rate');
const convertButton = document.getElementById('convertButton');
const result = document.getElementById('result');

convertButton.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const rate = parseFloat(rateInput.value);
  
  if (!isNaN(amount) && !isNaN(rate) && rate > 0) {
    result.textContent = (amount / rate).toFixed(2);
  } else {
    alert('Будь ласка, введіть коректні значення!');
  }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && topPosition > 0) topPosition -= step;
    if (event.key === 'ArrowDown' && topPosition < gameField.clientHeight - player.offsetHeight) topPosition += step;
    if (event.key === 'ArrowLeft' && leftPosition > 0) leftPosition -= step;
    if (event.key === 'ArrowRight' && leftPosition < gameField.clientWidth - player.offsetWidth) leftPosition += step;

    player.style.top = $; { topPosition; } px;
    player.style.left = $; { leftPosition; } px;
});
