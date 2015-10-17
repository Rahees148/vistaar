$(document).ready(function(){
	$('#menu > li').hover(function(){
        if(!$(this).find('.dropMenu').is(':visible')){			
			if($(this).hasClass('hasDrop')){
				$('.dropMenu').hide();
				if(!$('.dropMenuContainer').is(':visible')){	
					$('.dropMenuContainer').slideDown();
					$(this).find('.dropMenu').delay(300).fadeIn();
				}else{
					$(this).find('.dropMenu').stop().fadeIn();
				}
				
			}else{
				$('.dropMenu').hide();
				$('.dropMenuContainer').stop().slideUp();
			}
        }
    });
	$('.dropMenuContainer,.dropMenu').hover(function(){
		$('.dropMenu:visible').parent().find('a:first').addClass('hover');
	},function(){
		$('.dropMenu:visible').parent().find('a:first').removeClass('hover');
	})
	$('.hide-menu-container,.top-nav').mouseover(function(e){
        $('.dropMenu').hide();
        $('.dropMenuContainer').slideUp();
     });
	$('.mobilenav-button-container').on('click',function(){
		$('.mobile-nav').css('padding-top',$('header').height())
		if($('.wrap').hasClass('menu-open')){
			$('.wrap').height('auto');
			$('.wrap').removeClass('menu-open');			
			$('.wrap').animate({marginLeft:0},500,function(){
				$('header').css('position','fixed');
				$('.mobile-nav').delay('500').hide();
			});
			
		}else{		
			$('header').css('position','absolute');
			$('.wrap').height($(window).height());
			$('.wrap').addClass('menu-open');
			$('.mobile-nav').show();
			$('.wrap').animate({marginLeft:-260},500);
		}
	});
	$('.hide-menu-container').click(function(){
		if($('.wrap').hasClass('menu-open')){
			$('.wrap').height('auto');
			$('.wrap').removeClass('menu-open');			
			$('.wrap').animate({marginLeft:0},500,function(){
				$('header').css('position','fixed');
				$('.mobile-nav').delay('500').hide();
			});			
		}
	})
	$(document).on('click','.job-position h6',function(){
		$('.openings .apply-form').slideUp();
		if($(this).parents('.openings').hasClass('collapse')){
			$(this).parent().find('.job-description').slideUp();
			$(this).parents('.openings').removeClass('collapse');
		}else{
			$('.openings').removeClass('collapse');
			$(this).parents('.openings').addClass('collapse');
			$('.job-description').slideUp();
			$(this).parent().find('.job-description').slideDown();
		}
		
	});
	$(document).on('click','.job-position .applyNow',function(){
		$(this).parents('.job-description').hide();
		$(this).parents('.openings').find('.apply-form').fadeIn('slow');
	});
	$(document).on('click','.show-overlay',function(){
		$('.blkOverlay').fadeTo('slow',.5);
		var topPosition = $(this).offset().top-400;
		$('.teamOverlay').css('top',topPosition);
		$('.teamOverlay h5,.teamOverlay figure,.teamOverlay p').html('');
		$('.teamOverlay h5').html($(this).parent().find('h5').html());
		$('.teamOverlay figure').html($(this).parent().find('figure').html());
		$('.teamOverlay p').html($(this).parent().attr('data-content'));
		$('.teamOverlay').fadeIn();
	});
	$(document).on('click','.popUp-close',function(){
		$('.teamOverlay').fadeOut();
		$('.blkOverlay').fadeOut('slow');
	});
	$('.management-team h2').on('click',function(){
		$(this).parent().next('.team-container').slideToggle();
		$(this).toggleClass('collapse');
	});
	$('.client-speak').on('click',function(){
		var clientName = $(this).attr('data-name');
		$('.customer-testimonial').hide();			
			$('.'+clientName).fadeIn();
			$('.client-speak').removeClass('active');
			$(this).addClass('active');
		$('html, body').animate({
			scrollTop: $('.'+clientName).offset().top-200
		}, 100);
		/*if($(window).width() < 601){
			$('.customer-testimonial').not('.'+clientName).hide();
			$('.'+clientName).slideToggle();
			$('.client-speak').not(this).removeClass('active');
			$(this).toggleClass('active');
		}else{
			$('.customer-testimonial').hide();			
			$('.'+clientName).fadeIn();
			$('.client-speak').removeClass('active');
			$(this).addClass('active');
		}*/
	})
	 testimonial()
});
$(window).resize(function(){
	testimonial()
});
function showOverlay(overlayId){
	$('.blkOverlay').fadeTo('slow',.5);
	$('#'+overlayId).fadeIn('slow');
}
function hideOverlay(overlayId){
	$('.blkOverlay').fadeOut('slow');
	$('#'+overlayId).fadeOut('slow');
}
function testimonial(){
	if($(window).width() < 601){
		$('.client-speak').each(function(){
			var calssName = $(this).attr('data-name');
			$(this).append($('.'+calssName));
		});
	}else{
		$('.client-speak').each(function(){
			var calssName = $(this).attr('data-name');
			$('.'+calssName).insertAfter('.tabsWarpper');
		});
	}
}