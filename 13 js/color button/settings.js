const colorSelect = document.getElementById('colorSelect');

const savedColor = localStorage.getItem('backgroundColor');
if (savedColor) {
  document.body.style.backgroundColor = savedColor;
  colorSelect.value = savedColor;
}

colorSelect.addEventListener('change', () => {
  const selectedColor = colorSelect.value;
  document.body.style.backgroundColor = selectedColor;
  localStorage.setItem('backgroundColor', selectedColor);
});