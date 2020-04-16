
$(document).ready(function() {

  // jquery for slick slider
  $('.sk-main__banner-slider').slick({
    autoplay: false,
    dots: true,
    draggable: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        }
      }
    ]
  });

  
  // jquery for content navigation
  // add active calss at nav
  $(".sk-product__info-btn").click(function() {
    $(".sk-product__info-btn").removeClass("active");
    $(this).addClass("active");
  });

  // show current clicked data
  $("#sk-product__info-list li button").on("click", function(e) {
    // prevent default behaviour of the anchor tag
    e.preventDefault();
    // save the data attribute for the anchor tag that was clicked
    var page = $(this).data("page");

    // find the current 'page' element that doesn't have the class .hide -- this is a css selector
    $("#sk-product__info-details .sk-product__item-info:not('.display-none')")
      .stop()
      .fadeOut("fast", function() {
        // adds .hide to the element that was showing after it has faded out
        $(this).addClass("display-none");
        // remove hidden class from element with the same data attribute as the anchor tag
        $('#sk-product__info-details .sk-product__item-info[data-page="' + page + '"]')
          .fadeIn("slow")
          .removeClass("display-none");
      });
  });


// --------------------------------------- 
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
   useTransform: true,
    speed: 300
  });
 
  $('.slider-nav')
    .on('init', function(event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('active');
    })
    .slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: false,
      focusOnSelect: false,
      infinite: false
    });
 
  $('.slider-for').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.active').removeClass('active');
    $(currrentNavSlideElem).addClass('active');
  });
 
  $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');
 
    $('.slider-for').slick('slickGoTo', goToSingleSlide);
  });
});