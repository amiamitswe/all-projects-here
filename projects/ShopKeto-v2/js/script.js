
$(document).ready(function() {

  // jquery for slick slider
  $('.sk-product__main-img').slick({
    autoplay: false,
    dots: false,
    draggable: true
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
});