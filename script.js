// ================= CUSTOM CURSOR =================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

// Hover effect for clickable elements
const hoverElements = document.querySelectorAll("a, button, img, iframe");

hoverElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    if (cursor) cursor.classList.add("active");
  });
  el.addEventListener("mouseleave", () => {
    if (cursor) cursor.classList.remove("active");
  });
});


// ================= CAROUSEL =================
document.querySelectorAll(".carousel").forEach(carousel => {

  const track = carousel.querySelector(".carousel-track");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  const images = track.querySelectorAll("img");

  let index = 0;

  function updateCarousel() {
    const imageWidth = images[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * imageWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < images.length - 1) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

});


// ================= LIGHTBOX =================
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".carousel img").forEach(img => {
  img.addEventListener("click", () => {
    if (lightbox && lightboxImg) {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    }
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
}
