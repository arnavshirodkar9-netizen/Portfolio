document.querySelectorAll(".carousel").forEach(carousel => {

  const track = carousel.querySelector(".carousel-track");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

  let index = 0;
  const images = track.querySelectorAll("img");
  const totalImages = images.length;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalImages;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
  });

});
