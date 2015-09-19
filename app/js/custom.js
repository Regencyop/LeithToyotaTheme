
$(document).ready(function() { 
	
	//Owl Carousel Settings
	/*$(".owl-carousel.homeboxes").owlCarousel({
		navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 5000,
        stopOnHover: true,
        rewindNav: true
	});*/
	
	
	$(".mobile-menu-wrap a").click(function() {
	   $(".mobile-menu-wrap").dropdown("toggle");
	});
	
	//Mobile Menu Toggle
	$('.mobile-nav-toggle').click(function(){
		
		$(this).toggleClass('active');
		$('.mobile-menu-wrap').slideToggle(300);
		
	});
	
});	


// Window Scroll ///////////////////////////////////////////////////////////////////////////////////////////////

$(window).scroll(function() {
    
    var winHeight = $(window).scrollTop();
	
    if ( winHeight  > 100 ) {
    
        $('header').addClass('shrink');
        
    } else {
    	
    	$('header').removeClass('shrink');
    	
    }
    
});