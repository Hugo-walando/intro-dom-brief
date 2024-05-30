let carouselInner = document.querySelector('.carousel-inner');
let currentIndex = 0;
let totalItems = carouselInner.children.length;

document.querySelector('#next-btn').addEventListener('click', (e) => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

document.querySelector('#prev-btn').addEventListener('click', (e) => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});

const updateCarousel = () => {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
};
