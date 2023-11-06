const toggleButton = document.getElementById('toggleButton');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  if (menu.style.left === '-250px') {
    menu.style.left = '0';
  } else {
    menu.style.left = '-250px';
  }
});
