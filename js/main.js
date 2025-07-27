  
  // menu toggle
  
  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');

  menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('hidden');
    mainMenu.classList.toggle('flex');
  });



   const slides = document.querySelectorAll('.hero-slide');
  const nextBtn = document.getElementById('nextSlide');
  const prevBtn = document.getElementById('prevSlide');

  let current = 0;
  let interval = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === index) ? '1' : '0';
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  // arrow btn
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  // auto play
  function startSlider() {
    interval = setInterval(nextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(interval);
    startSlider();
  }

  showSlide(current);
  startSlider();
