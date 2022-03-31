var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
      spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      
      320: {
          slidesPerView: 1,
          slidesPerGroup: 1,

          spaceBetween: 20,
         
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,

          spaceBetween: 20,
         
        },
        999: {
          slidesPerView: 3,
          slidesPerGroup: 3,

          spaceBetween: 20,
         
        }
     
  },

  });


  function myFunction(x) {
    x.classList.toggle("change");
  }