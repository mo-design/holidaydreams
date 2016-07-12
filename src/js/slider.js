(function( $ ){
  
	$.fn.slider = function(){
	
	var slideNum = [];
	var slideCount = [];
	
	prepareSlide('.slide1', 1);
	prepareSlide('.slide2', 2);
	prepareSlide('.slide3', 3);
	
	
	
	$('.slider__left1').click(function(){  animSlide("prev", '.slide1', 1); }  );
	$('.slider__left2').click(function(){  animSlide("prev", '.slide2', 2); }  );
	$('.slider__left3').click(function(){  animSlide("prev", '.slide3', 3); }  );
	$('.slider__right1').click(function(){  animSlide("next", '.slide1', 1); }  );
	$('.slider__right2').click(function(){  animSlide("next", '.slide2', 2); }  );	
	$('.slider__right3').click(function(){  animSlide("next", '.slide3', 3); }  );
	


	
	
	function prepareSlide (name, i) {

		$(name).hide().eq(0).show();
		slideNum[i] = 0;
		slideCount[i] = $(name).size();

	}

	
	
	
	function animSlide (arrow, name, i){
 
        $(name).eq(slideNum[i]).fadeOut(400);
		
        if(arrow == "next"){
            if(slideNum[i] == (slideCount[i]-1)){slideNum[i]=0;}
            else{slideNum[i]++}
            }
        else if(arrow == "prev")
        {
            if(slideNum[i] == 0){slideNum[i]=slideCount[i]-1;}
            else{slideNum[i]-=1}
        }
 
        $(name).eq(slideNum[i]).fadeIn(400);
		
    }


	
	
    return this;
  };

})(jQuery);