  
  // menu toggle
  
  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');

  menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('hidden');
    mainMenu.classList.toggle('flex');
  });



  //hero section slider
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


   const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    manufacturer: "SoundTech",
    description: "High quality wireless headphones with noise cancellation.",
    price: "$99",
    coupon: "10% OFF",
    image: "./images/earphone1.jpg",
    rating: 0
  },
  {
    id: 2,
    name: "Smart Watch",
    manufacturer: "TimeX",
    description: "Track your fitness and notifications on the go.",
    price: "$149",
    coupon: "",
    image: "./images/smartWatch1.jpg",
    rating: 0
  },
  {
    id: 3,
    name: "4K Monitor",
    manufacturer: "DisplayMax",
    description: "Crystal-clear visuals with ultra HD 4K resolution.",
    price: "$299",
    coupon: "5% OFF",
    image: "./images/phone1.jpg",
    rating: 0
  },
  {
    id: 4,
    name: "4K Monitor",
    manufacturer: "DisplayMax",
    description: "Crystal-clear visuals with ultra HD 4K resolution.",
    price: "$299",
    coupon: "5% OFF",
    image: "./images/phone3.jpg",
    rating: 0
  },
  {
    id: 5,
    name: "4K Monitor",
    manufacturer: "DisplayMax",
    description: "Crystal-clear visuals with ultra HD 4K resolution.",
    price: "$299",
    coupon: "5% OFF",
    image: "./images/earphone2.jpg",
    rating: 0
  },
  {
    id: 6,
    name: "4K Monitor",
    manufacturer: "DisplayMax",
    description: "Crystal-clear visuals with ultra HD 4K resolution.",
    price: "$299",
    coupon: "5% OFF",
    image: "./images/phone2.png",
    rating: 0
  },
  {
    id: 7,
    name: "4K Monitor",
    manufacturer: "DisplayMax",
    description: "Crystal-clear visuals with ultra HD 4K resolution.",
    price: "$299",
    coupon: "5% OFF",
    image: "./images/phone4.png",
    rating: 0
  },
  {
    id: 8,
    name: "4K Monitor",
    manufacturer: "DisplayMax",
    description: "Crystal-clear visuals with ultra HD 4K resolution.",
    price: "$299",
    coupon: "5% OFF",
    image: "./images/phone5.png",
    rating: 0
  },
];

const slider = document.getElementById('slider');
const modal = document.getElementById('modalBackdrop');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalManufacturer = document.getElementById('modalManufacturer');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const modalCoupon = document.getElementById('modalCoupon');
const modalStars = document.getElementById('modalStars');
let currentProductId = null;

//  product cards
function renderProducts() {
  slider.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "min-w-[250px] bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded mb-4">
      <h3 class="text-lg font-semibold">${product.name}</h3>
      <p class="text-indigo-600 font-bold">${product.price}</p>
      <div class="flex text-yellow-400 mt-2">
        ${[1, 2, 3, 4, 5].map(i => `
          <svg class="w-5 h-5 ${i <= product.rating ? 'fill-current' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.915c.969 0 1.371 1.24.588 1.81l-3.977 2.89 1.518 4.674c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.977 2.89c-.784.57-1.838-.197-1.539-1.118l1.518-4.674-3.977-2.89c-.783-.57-.38-1.81.588-1.81h4.915l1.518-4.674z"/>
          </svg>`).join("")}
      </div>
    `;
    card.addEventListener("click", () => openModal(product.id));
    slider.appendChild(card);
  });
}

// Open modal
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  currentProductId = product.id;
  modalImage.src = product.image;
  modalName.textContent = product.name;
  modalManufacturer.textContent = product.manufacturer;
  modalDescription.textContent = product.description;
  modalPrice.textContent = product.price;
  modalCoupon.textContent = product.coupon;
  renderModalStars(product.rating);
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

// Close modal
document.getElementById("modalClose").addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});

//  stars in modal
function renderModalStars(selected) {
  modalStars.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.innerHTML = "★";
    star.className = `cursor-pointer ${i <= selected ? 'text-yellow-400' : 'text-gray-300'}`;
    star.addEventListener("click", () => {
      products.find(p => p.id === currentProductId).rating = i;
      renderModalStars(i);
      renderProducts(); // update rating on card
    });
    modalStars.appendChild(star);
  }
}

// Slider product
document.getElementById("btnPrev").addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: 'smooth' });
});
document.getElementById("btnNext").addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
});

// Auto slide
setInterval(() => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
}, 5000);



// Initial product
renderProducts();
