const colors = [
    getComputedStyle(document.documentElement).getPropertyValue('--color1').trim(),
    getComputedStyle(document.documentElement).getPropertyValue('--color2').trim(),
    getComputedStyle(document.documentElement).getPropertyValue('--color3').trim(),
    getComputedStyle(document.documentElement).getPropertyValue('--color4').trim(),
    getComputedStyle(document.documentElement).getPropertyValue('--color5').trim()
  ];
  
  document.getElementById('colorButton').addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });