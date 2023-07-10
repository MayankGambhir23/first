let me = 3;
var currentIndex = 0;
var images = document.querySelectorAll('.carousel img');
var totalImages = images.length;

function showImage(index) {
  for (var i = 0; i < totalImages; i++) {
    images[i].style.display = 'none';
  }

  images[index].style.display = 'block';
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function startCarousel() {
  showImage(currentIndex);
  setInterval(nextImage, 3000); // Change image every 2 seconds
}

startCarousel();