// ================= CUSTOM CURSOR =================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


// ================= CAROUSEL =================
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


// ================= LIGHTBOX =================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".carousel img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
