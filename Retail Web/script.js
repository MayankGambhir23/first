const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const carousel = document.querySelector('.carousel');
let currentPosition = 0;
const imageWidth = carousel.offsetWidth;

function slideRight() {
  currentPosition -= imageWidth;
  if (currentPosition < -imageWidth * (carousel.children.length - 1)) {
    currentPosition = 0;
  }
  carousel.style.transform = `translateX(${currentPosition}px)`;
}

function slideLeft() {
  currentPosition += imageWidth;
  if (currentPosition > 0) {
    currentPosition = -imageWidth * (carousel.children.length - 1);
  }
  carousel.style.transform = `translateX(${currentPosition}px)`;
}

setInterval(slideRight, 3000);
