$(document).ready(function() {
	
	$('.slider').slider();
	
	
	var container = document.querySelector('#container');
	
	
	var msnry = new Masonry( container, {
	itemSelector: '.item',
	gutter: 20
  
	});
	
	
	
	
	var randomArr = ["nature","coffee","book","kid","cat","school","dragon","office","internet","chocolate","birthday","dance","fish","face","cartoon","winter","food","person","flores","girl","house","pattern","border","navidad","sport","globe","fitness","erotic","vintage","rose","flower","christmas","background","medical","family","vector","tattoo","music","woman","baby","business","wedding","beach","computer","fashion","car","logo","grunge","spa","design","golf","abstract","floral","hand","party","tree","tribal","frame","dog","butterfly","water","heart","retro","icon","tiger","love","child","couple","football","shopping","angel","star","fruit","man","summer","money","ornament","texture","wine","horse","halloween","football","christmastree","technology","skull","construction","sun","bikini","doctor","art","banner","leaf","eye","massage","dj","spring","paper","yoga","animal"];
	var picArr = $('.item');

	loadImg();		// первая загрузка страницы
	
	
	
	
	
	
	$('#search__btn').click(function(event) {
		var txt = $('#search__zapros').val();
		loadImg(txt);
	});

	
	
	$('#search__zapros').keypress(function(event){
		if(event.keyCode==13){
			event.preventDefault();
			var txt = $('#search__zapros').val();
			loadImg(txt);
	    }
		

	});


	
  function loadImg(txt) {


		if (txt === undefined) { txt = randomArr[Math.round(Math.random()*100)]; }
	

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: 'https://pixabay.com/api/?key=2802983-1712cd405358169b688575dbd&q=' + txt+ '&image_type=photo&orientation=horizontal',
			min_width: "500",
			//orientation: "horizontal",

			success: function(data) {
        
				console.log(data);
				var inner;
				
				for (var i=0; i < picArr.length; i++) {

					if (data.hits.length < 8 ) {
						$(picArr[i]).css('border', '1px solid #333333');
						inner = '<div class="error">NOTHING<br><br>Enter NEW request!</div>';		
					}
						
					else {
						inner = '<div class="mason_text">' + data.hits[i].tags +'</div><img class="mason_img" src="' + data.hits[i].webformatURL + '">';
					}
					
					picArr[i].innerHTML = inner;
					
				}
		
	
	
			}
			
			

	
	
		});	  
	
  

  } 
	
 	

	
  
});



	