const ratingMessage = document.getElementById('ratingMessage');
document.querySelectorAll('[name="rating"]').forEach(radio => {
  radio.addEventListener('change', (event) => {
    ratingMessage.textContent = `Дякуємо за вашу оцінку: ${event.target.value}!`;
  });
});