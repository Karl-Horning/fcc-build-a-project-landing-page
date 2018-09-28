// For when scrolling
$(window).on('scroll', function() {
   // scrollTop < 0 is for Safari
   if($(window).scrollTop() < 0) {
      $('nav').removeClass('navbar-dark bg-dark');
   } else if($(window).scrollTop()) {
      $('nav').addClass('navbar-dark bg-dark');
   } 
});

// For when at the top of the page 
$('.navbar-toggler').click(function() {
    $("#nav-bar").toggleClass("navbar-open");
})