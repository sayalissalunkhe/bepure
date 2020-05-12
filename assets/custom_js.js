var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// (function($) {

//   var allPanels = $('.accordion .panel').hide();

//   $('.accordion').click(function() {
//     allPanels.slideUp();
//     return false;
//   });

// })(jQuery);

$(document).ready(function () {

  (function ($) {

    var allPanels = $('.accordion');

    $('.accordion').click(function () {
      $(this).next().slideToggle("slow").toggleClass("active");
      return false;
    });

  })(jQuery);

  $('#product-image-slider').slick({ 
    dots: true
  });
}); 