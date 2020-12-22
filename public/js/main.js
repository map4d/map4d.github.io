$(document).ready(function () {
    var wWidth = $(window).width();
    if (wWidth >= 992) {
      $("#itemDropdown").hover(function () {
        $(this).children("ul").slideToggle(300);
      });
    } 
  });