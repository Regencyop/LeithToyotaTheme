
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
	
	//Mobile Menu Toggle
	$('.mobile-nav-toggle').click(function(){
		
		$(this).toggleClass('active');
		$('.mobile-menu-wrap').slideToggle(300);
		
	});
	
});	


// Sizing Event Listeners ////////////////////////////////////////////////////////////////////////////////////

/*function adaptSizing() {

	// Adds margin to top to accomodate fixed header
	var headerHeight = $('.navbar-fixed-top').height();
	var owlCarousel = $('.owl-carousel.homeboxes').length;
	
	if ( owlCarousel > 0 ) {
		$('.owl-carousel.homeboxes').css("margin-top", headerHeight);
	} 
	
}
$(window).load(adaptSizing);
$(window).resize(adaptSizing);*/


// Window Scroll ///////////////////////////////////////////////////////////////////////////////////////////////

$(window).scroll(function() {
    
    var winHeight = $(window).scrollTop();
	
    if ( winHeight  > 100 ) {
    
        $('header').addClass('shrink');
        
    } else {
    	
    	$('header').removeClass('shrink');
    	
    }
    
});