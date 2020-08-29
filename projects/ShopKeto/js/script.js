
$(document).ready(function() {

  // ----------------------------------
  // main banner header slider
  $('.sk-main__banner-slider').slick({
    centerMode: true,
    dots: true,
    centerPadding: '0px',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      },
      {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
      }
    ]
  });

  // jquery for content navigation
  $(".sk-product__info-btn").click(function() {
    $(".sk-product__info-btn").removeClass("active");
    $(this).addClass("active");
  });

  $("#sk-product__info-list li button").on("click", function(e) {
    e.preventDefault();
    let page = $(this).data("page");

    $("#sk-product__info-details .sk-product__item-info:not('.display-none')")
      .stop()
      .fadeOut("fast", function() {
        $(this).addClass("display-none");

        $('#sk-product__info-details .sk-product__item-info[data-page="' + page + '"]')
          .fadeIn("slow")
          .removeClass("display-none");
      });
  });


  // --------------------------------------- 
  // slick slider for porduce details 
  $('.sk-product-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 300
  });
 
  $('.sk-product-slider-nav')
    .on('init', function(event, slick) {
      $('.sk-product-slider-nav .slick-slide.slick-current').addClass('active');
    })
    .slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: false,
      focusOnSelect: false,
      infinite: false
    });
 
  $('.sk-product-slider-for').on('afterChange', function(event, slick, currentSlide) {
    $('.sk-product-slider-nav').slick('slickGoTo', currentSlide);
    let currrentNavSlideElem = '.sk-product-slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.sk-product-slider-nav .slick-slide.active').removeClass('active');
    $(currrentNavSlideElem).addClass('active');
  });
 
  $('.sk-product-slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    let goToSingleSlide = $(this).data('slick-index');
 
    $('.sk-product-slider-for').slick('slickGoTo', goToSingleSlide);
  });
});




// toggle sidemenu

$(document).ready(function(){

  // sk countrys
  $(".sk-header__country").click(function(){
    $(".add_overlay").addClass("overlay");
    $(".sk-country").addClass("sk-country__show");
  });



  $(".sk-country__list-close").click(function(){
    $(".sk-country").removeClass("sk-country__show");
    $(".add_overlay").removeClass("overlay");
  });

  // sk checkout cart

  $(".sk-header__cart").click(function(){
    $(".add_overlay").addClass("overlay");
    $(".sk-checkout-cart").addClass("sk-cart__show");
  });



  $(".sk-cart__close-btn").click(function(){
    $(".sk-checkout-cart").removeClass("sk-cart__show");
    $(".add_overlay").removeClass("overlay");
  });

  $(".sk-cart__chackout-btn").click(function(){
    $(".sk-checkout-cart").removeClass("sk-cart__show");
    $(".add_overlay").removeClass("overlay");
  });



  // please note
  $(".sk-pleaseNote").click(function(){
    $(".add_overlay").addClass("overlay");
    $(".sk-pleaseNote-sideMenu").addClass("sk-cart__show");
  });



  $(".sk-cart__cross-sign").click(function(){
    $(".sk-pleaseNote-sideMenu").removeClass("sk-cart__show");
    $(".add_overlay").removeClass("overlay");
  });


  // go to your cart 

  $(".sk-cart-ok-got-it").click(function(){
    $(".sk-pleaseNote-sideMenu").removeClass("sk-cart__show");
    $(".add_overlay").removeClass("overlay");
    $(".add_overlay").addClass("overlay");
    $(".sk-addto-your-cart").addClass("sk-cart__show");
  });



  $(".sk-cart__cross-sign").click(function(){
    $(".sk-addto-your-cart").removeClass("sk-cart__show");
    $(".add_overlay").removeClass("overlay");
  });



  // sk checkout cart step by step

  $(".sk-cart-go-got-it").click(function(){
    $(".sk-addto-your-cart").removeClass("sk-cart__show");
    $(".add_overlay").removeClass("overlay");
    $(".add_overlay").addClass("overlay");
    $(".sk-checkout-cart").addClass("sk-cart__show");
  });
});



// type text
class typeText {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  }
}


window.onload = function() {
  let elements = document.getElementsByClassName('typewrite');
  for (let i=0; i<elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-type');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new typeText(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite";
  document.body.appendChild(css);
};


// nav bar scroll effect 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('.sk-header__navbar').classList.add("sk-header__sticky");
  } else {
    document.querySelector('.sk-header__navbar').classList.remove("sk-header__sticky");
  }
}

// category products 
$('.sk-category__products').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  responsive: [
    {

      breakpoint: 768,

      settings: {
        slidesToShow: 2
      }
    }
  ]
});
