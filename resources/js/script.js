// @hen scrolling
$(window).on('scroll', function() {
    // scrollTop < 0 is for Safari
    console.log($(window).scrollTop());
    
    if($(window).scrollTop() <= 0) {
       $('nav').removeClass('navbar-dark bg-dark');
       $('nav').removeClass('navbar-open');
       $('.navbar-collapse').removeClass('show');
    } else if($(window).scrollTop()) {
        $('nav').addClass('navbar-dark bg-dark');
    }
});

// When at the top of the page 
$('.navbar-toggler').click(function() {
    $('nav').addClass('navbar-dark bg-dark');
})
