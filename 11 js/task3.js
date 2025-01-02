const countryInfo = document.getElementById('countryInfo');
document.getElementById('countrySelect').addEventListener('change', (event) => {
  const countryData = {
    'Україна': 'Столиця: Київ. Населення: ~41 млн.',
    'США': 'Столиця: Вашингтон. Населення: ~331 млн.',
    'Німеччина': 'Столиця: Берлін. Населення: ~83 млн.'
  };
  countryInfo.textContent = countryData[event.target.value] || '';
});