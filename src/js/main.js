"use strict"

$(document).ready(function(){

// mobile menu

  $('.icon-menu').click(function () {
    $('.mob-menu').addClass('slide-up')
  });
  
  $('.closeBtn').click(function () {
  
    $('.mob-menu').removeClass('slide-up')
  });
  
  $('.mob-menu ul li a').click(function () {
    $('.mob-menu').removeClass('slide-up')
  });

// navbar fixed


let lastScrollTop = 0;
$(window).scroll(function(event){
   let st = $(this).scrollTop();
   if (st > lastScrollTop || st < 1000){
    $(".header").css("padding" , "2.5rem 0");  
    $(".header").removeClass("fixed-nav");
   }  else{
    $(".header").css("padding" , "1rem 0");
    $(".header").addClass("fixed-nav");
   }
   lastScrollTop = st;
});

  // $(window).scroll(function(){
  // 	var scroll = $(window).scrollTop();
	//   if (scroll > -1) {
	//     $(".header").css("padding" , "1rem 0");
  //     $(".header").addClass("fixed-nav");
	//   }

	//   else{
	// 	  $(".header").css("padding" , "2.5rem 0");  
  //     $(".header").removeClass("fixed-nav");
	//   }
  // })
})

var helpers = {
	addZeros: function (n) {
		return (n < 10) ? '0' + n : '' + n;
	}
};

function sliderInit() {
  let $slider = $('.one-item-main');
  $slider.each(function() {
    let $sliderParent = $(this).parent();
    $(this).slick({
      dots: false,
      infinite: true,
      speed: 4000,
      cssEase: 'linear',
      slidesToShow: 1,
      autoplay: true,
      arrows: false,
      fade:true,

    });

    if ($(this).find('.slider__item').length > 1) {
      $(this).siblings('.slider__numbers').show();
    }

    $(this).on('afterChange', function(event, slick, currentSlide){
      $sliderParent.find('.slider__numbers .slider__num').html(helpers.addZeros(currentSlide + 1));
    });

    let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $sliderParent.find('.slider__numbers .slider__total-num').html(helpers.addZeros(sliderItemsNum));

  });
};

sliderInit();