jQuery(function($) {
     "use strict";
    jQuery('.animate').appear();
    jQuery(document.body).on('appear', '.animate', function(e, $affected) {
        var fadeDelayAttr;
        var fadeDelay;
        jQuery(this).each(function(){

            if (jQuery(this).data("delay")) {
                fadeDelayAttr = jQuery(this).data("delay")
                fadeDelay = fadeDelayAttr;				
            } else {
                fadeDelay = 0;
            }			
            jQuery(this).delay(fadeDelay).queue(function(){
                jQuery(this).addClass('animated').clearQueue();
            });			
        })			
    });
	
    jQuery('#sixHund').appear();
    jQuery(document.body).on('appear', '#sixHund', function(e, $affected) {
         if(!$(this).hasClass('animated')){
            $('#sixHund').prop('number', 0).animateNumber({
                number: 600
            },700);
            $(this).addClass('animated')
        }
    });
    jQuery('#oneFifty').appear();
    jQuery(document.body).on('appear', '#oneFifty', function(e, $affected) {
         if(!$(this).hasClass('animated')){
            $('#oneFifty').prop('number',0).animateNumber({
                number: 150
            },700);
            $(this).addClass('animated')
        }
    });
    jQuery('#sixThousand').appear();
    jQuery(document.body).on('appear', '#sixThousand', function(e, $affected) {
         if(!$(this).hasClass('animated')){
            $('#sixThousand').prop('number', 0).animateNumber({
                number: 60000
            },750);
            $(this).addClass('animated')
        }
    });
    
	 jQuery('#circle').appear();
    jQuery(document.body).on('appear', '#circle', function(e, $affected) {
        if(!$('#circle').hasClass('animated')){
           $('#circle').circleProgress({
                value: 1,
                size: 190,
                startAngle: -Math.PI / 4 * 2,
                animationStartValue:.0,
                thickness:60,
                fill: {
                    color: '#fff',
                    image: 'images/graph-1.jpg'
                }
            });
			 $('#circle').addClass('animated');
        }
    });
	jQuery('#circle2').appear();
    jQuery(document.body).on('appear', '#circle2', function(e, $affected) {
        if(!$('#circle2').hasClass('animated')){
           $('#circle2').circleProgress({
                value: 1,
                size: 190,
                startAngle: -Math.PI / 4 * 2.05,
                animationStartValue:.0,
                thickness:60,
                fill: {
                    color: '#fff',
                    image: 'images/graph-2.jpg'
                }
            });
			 $('#circle2').addClass('animated');
        }
    });
	jQuery('#circle3').appear();
    jQuery(document.body).on('appear', '#circle3', function(e, $affected) {
        if(!$('#circle3').hasClass('animated')){
           $('#circle3').circleProgress({
                value: 1,
                size: 190,
                startAngle: -Math.PI / 4 * 2,
                animationStartValue:.0,
                thickness:60,
                fill: {
                    color: '#fff',
                    image: 'images/graph-3.jpg'
                }
            });
			 $('#circle3').addClass('animated');
        }
    });
    

});(jQuery);
		
		
		
		
		
		
		