var V_SLIDER = (function () {
    var _initSlideBannerHome = function () {
      if ($('.slide-banner-home').length > 0) {
        const mySliderBanner = new Swiper(".slide-banner-home", {
          slidesPerView: 1,
          loop: false,
          speed: 600,
          autoHeight: true,
          autoplay: false,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          pagination: {
            el: ".pgt_control_slide",
            clickable: true,
          },
          navigation: {
            nextEl: ".ngt_control_slide .btn_control_slide_next",
            prevEl: ".ngt_control_slide .btn_control_slide_prev",
          },
        });
      }
    };

    var _initSlidePostTeam = function(){
	    if ($('.slide-post-team').length > 0) {
	      const mySliderProduct = new Swiper('.slide-post-team', {
          slidesPerView: 3,
	        spaceBetween: 30,
          autoHeight:false,
          draggable: true,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction:false,
            pauseOnMouseEnter:true,
          },
	      	breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
                freeMode:true,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            }
          },
	      });
	    }
 	  };
    
    var _initSlideImageProduct = function(){
	    if ($('.slide-image-product').length > 0) {
	      const mySliderProduct = new Swiper('.slide-image-product .swiper', {
	        spaceBetween: 25,
          autoHeight:false,
          slidesPerView: 1.5,
          draggable: true,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction:false,
            pauseOnMouseEnter:true,
          },
          navigation: {
            nextEl: ".slide-image-product .btn_control_slide_next",
            prevEl: ".slide-image-product .btn_control_slide_prev",
          },
	      	breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 25,
                freeMode:true,
            },
          },
	      });
	    }
 	  };

    return {
      _: function () {
        _initSlideBannerHome();
        _initSlidePostTeam();
        // _initSlideImageProduct();
      },
    };
  })();
  window.addEventListener("DOMContentLoaded", (event) => {
    V_SLIDER._();
  });
