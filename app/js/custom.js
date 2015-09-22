
$(document).ready(function() { 
	
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