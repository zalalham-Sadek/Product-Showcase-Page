  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');

  menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('hidden');
    mainMenu.classList.toggle('flex');
  });
