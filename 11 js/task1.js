document.querySelectorAll('[name="color"]').forEach(radio => {
    radio.addEventListener('change', (event) => {
      document.body.style.backgroundColor = event.target.value;
    });
  });