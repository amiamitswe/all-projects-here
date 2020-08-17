$(document).ready(function(){
  $(".sk-header__country").click(function(){
    $(".add_overlay").addClass("overlay");
    $(".sk-country").addClass("sk-country__show");
  });



  $(".sk-country__list-close").click(function(){
    $(".sk-country").removeClass("sk-country__show");
    $(".add_overlay").removeClass("overlay");
  });
});