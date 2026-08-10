new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1.08, spaceBetween: 16 },
    640: { slidesPerView: 1.3, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 40 },
    1024: { slidesPerView: 3, spaceBetween: 60 },
  },
});
