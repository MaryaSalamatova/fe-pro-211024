// Task 1: Change Color
const colorButton = document.getElementById('colorButton');
const text = document.getElementById('text');

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

colorButton.addEventListener('click', () => {
  text.style.color = getRandomColor();
});

// Task 2: Double Click
const resizable = document.getElementById('resizable');

resizable.addEventListener('dblclick', () => {
  resizable.style.width = resizable.offsetWidth * 2 + 'px';
  resizable.style.height = resizable.offsetHeight * 2 + 'px';
});

// Task 3: Counter
let count = 0;
const counterButton = document.getElementById('counterButton');
const counter = document.getElementById('counter');

function incrementCounter() {
  count++;
  counter.textContent = count;
  if (count > 10) {
    counterButton.removeEventListener('click', incrementCounter);
  }
}

counterButton.addEventListener('click', incrementCounter);

// Task 4: Remove Elements
const addDivsButton = document.getElementById('addDivsButton');
const container = document.getElementById('container');

addDivsButton.addEventListener('click', () => {
  container.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = 'Елемент ${i}';
    div.addEventListener('click', () => div.remove());
    container.appendChild(div);
  }
});

// Task 5: Event Target
const blockContainer = document.getElementById('blockContainer');

blockContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    alert('Клік по кнопці з класом: ${event.target.className}');
  }
});

// Task 6: Toggle Menu
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    menuButton.textContent = 'Відкрити меню';
  } else {
    menu.style.display = 'block';
    menuButton.textContent = 'Закрити меню';
  }
});