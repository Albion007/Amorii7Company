$(document).ready(function(){

	//Navigation bar toggle
	$('#navbar-toggler').click(function(){
		$('.navbar-collapse').slideToggle(400);
	});

	//navbar bg ndryshon kur levizmi poshte
	$(window).scroll(function(){
		let pos = $(window).scrollTop();
		if(pos >= 100){
			$('.navbar').addClass('cng-navbar');
		}else{
			$('.navbar').removeClass('cng-navbar');
		}
	});
});