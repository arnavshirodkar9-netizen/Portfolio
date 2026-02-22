const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button, .card").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

function setupCarousel(trackId) {
  const track = document.getElementById(trackId);
  const images = track.querySelectorAll("img");
  const prevBtn = track.parentElement.querySelector(".prev");
  const nextBtn = track.parentElement.querySelector(".next");

  let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateSlide();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
  });
}

setupCarousel("posterTrack");
setupCarousel("illustrationTrack");

