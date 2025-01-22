$(document).ready(function() {



// Slider  	
	if (jQuery().flexslider) {
	   $('.flexslider').flexslider({
			smoothHeight: true, 
			controlNav: false,           
			directionNav: true,  
			prevText: "&larr;",
			nextText: "&rarr;",
			selector: ".slides > .slide"
	    });
	};
    
    
    
// Smooth scrolling - css-tricks.com
	function filterPath(string){return string.replace(/^\//,'').replace(/(index|default).[a-zA-Z]{3,4}$/,'').replace(/\/$/,'');}var locationPath=filterPath(location.pathname);var scrollElem=scrollableElement('html','body');$('a[href*=#nav]').each(function(){var thisPath=filterPath(this.pathname)||locationPath;if(locationPath==thisPath&&(location.hostname==this.hostname||!this.hostname)&&this.hash.replace(/#/,'')){var $target=$(this.hash),target=this.hash;if(target){var targetOffset=$target.offset().top;$(this).click(function(event){event.preventDefault();$(scrollElem).animate({scrollTop:targetOffset},'slow',function(){location.hash=target;});});}}});function scrollableElement(els){for(var i=0,argLength=arguments.length;i<argLength;i++){var el=arguments[i],$scrollElement=$(el);if($scrollElement.scrollTop()>0){return el;}else{$scrollElement.scrollTop(1);var isScrollable=$scrollElement.scrollTop()>0;$scrollElement.scrollTop(0);if(isScrollable){return el;}}}return[];}



// TOGGLES
	$('.toggle-view li').click(function () {
	    var text = $(this).children('.toggle');
	    
	    if (text.is(':hidden')) {
	        text.slideDown('fast');
	        $(this).children('.toggle-title').addClass('tactive');      
	    } else {
	        text.slideUp('fast');
	        $(this).children('.toggle-title').removeClass('tactive');       
	    }       
	});
	
	
		
//TABS
	var tabContents = $(".tab_content").hide(), 
	    tabs = $("ul.tabs li");
	
	tabs.first().addClass("active").show();
	tabContents.first().show();
	
	tabs.click(function() {
	    var $this = $(this), 
	        activeTab = $this.find('a').attr('href');
	    
	    if(!$this.hasClass('active')){
	        $this.addClass('active').siblings().removeClass('active');
	        tabContents.hide().filter(activeTab).fadeIn();
	    }
	    return false;
	});	
	
	
	
// OPACITY
	$(".zoom").css({"opacity":0});
	$(".zoom").hover(
		function(){$(this).stop().animate({ "opacity": 0.9 }, 'slow');
		$(this).siblings('img').stop().animate({ "opacity": 0.7 }, 'fast');},
		
		function(){$(this).stop().animate({ "opacity": 0 }, 'fast');
		$(this).siblings('img').stop().animate({ "opacity": 1 }, 'fast');});



// PORTFOLIO sorting	
	// NAV 
        var now_genre = 0;
        var now_year = 0;
        var genres = ["*",".work_1",".work_2",".work_3"];
        var years = ["*",".year_2014",".year_2015"];
        $('.genre').click(function() {
	        $(this).parent().find(".genre,#work_all").removeClass("buttonactive");
	});
        $('.year').click(function() {
	        $(this).parent().find(".year,#work_all").removeClass("buttonactive");
	});
	$('.works-page aside menu a').click(function(){
		$(this).addClass("buttonactive");
	});
	// SELECTION

	$("#work_any").click(function() {
	  now_genre = 0;
	  $(years[now_year]).stop().fadeTo("normal",1);
	});

	$("#work_1").click(function() {
	  now_genre = 1;
	  $(".works figure").filter(years[now_year])
		.not(".work_1").stop().fadeTo("normal",0.1);
	  $(".work_1").filter(years[now_year]).stop().fadeTo("normal",1);
	});
	
	$("#work_2").click(function() {
	  now_genre = 2;
	  $(".works figure").filter(years[now_year])
		.not(".work_2").stop().fadeTo("normal",0.1);
	  $(".work_2").filter(years[now_year])
		.stop().fadeTo("normal",1);
	});
	
	$("#work_3").click(function() {
	  now_genre = 3;
	  $(".works figure").filter(years[now_year])
		.not(".work_3").stop().fadeTo("normal",0.1);
	  $(".work_3").filter(years[now_year]).stop().fadeTo("normal",1);
	});

	$("#year_any").click(function() {
	  now_year = 0;
	  console.log(genres[now_genre]);
	  $(genres[now_genre]).stop().fadeTo("normal",1);
	});
	
	$("#year_2014").click(function() {
	  now_year = 1;
	  $(".works figure").filter(genres[now_genre])
		.not(".year_2014").stop().fadeTo("normal",0.1);
	  $(".year_2014").filter(genres[now_genre])
		.stop().fadeTo("normal",1);
	});

	$("#year_2015").click(function() {
	  now_year = 2;
	  $(".works figure").filter(genres[now_genre])
		.not(".year_2015").stop().fadeTo("normal",0.1);
	  $(".year_2015").filter(genres[now_genre])
		.stop().fadeTo("normal",1);
	});

	$("#work_all").click(function() {
	  now_genre = 0; now_year = 0;
	  $(this).siblings().removeClass("buttonactive");
	  $(".works figure").stop().fadeTo("normal",1);
	});
	
// CONTACT form validation 	
	if (jQuery().validate) {
	    	$("#contact_form").validate();
	};
	
	
// END
});
