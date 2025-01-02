const player = document.getElementById('player');
const gameField = document.getElementById('gameField');
let topPosition = 175;
let leftPosition = 175;
const step = 10;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' && topPosition > 0) topPosition -= step;
  if (event.key === 'ArrowDown' && topPosition < gameField.clientHeight - player.offsetHeight) topPosition += step;
  if (event.key === 'ArrowLeft' && leftPosition > 0) leftPosition -= step;
  if (event.key === 'ArrowRight' && leftPosition < gameField.clientWidth - player.offsetWidth) leftPosition += step;

  player.style.top = '${topPosition}px';
  player.style.left = '${leftPosition}px';
});