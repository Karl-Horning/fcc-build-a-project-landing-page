// When scrolling
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

// Smooth Scrolling from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});