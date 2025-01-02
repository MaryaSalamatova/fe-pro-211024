const hobbyList = document.getElementById('hobbyList');
document.querySelectorAll('[name="hobby"]').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const selectedHobbies = Array.from(document.querySelectorAll('[name="hobby"]:checked'))
      .map(cb => cb.value);
    hobbyList.textContent = selectedHobbies.join(', ');
  });
});