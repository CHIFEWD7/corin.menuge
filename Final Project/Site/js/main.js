$(".js-hamburger").on("click", function(e){
	e.preventDefault();
	$("body").addClass("active");
});

$(".js-close").on("click", function(e){
	e.preventDefault();
	$("body").removeClass("active");
});


$(document).ready(function(){

$('.HowardButton').on('click', function(){
	console.log("clicked function working");


	overlay();
});

function overlay() {
	// var el = document.getElementsByClassName("HowardOverlay");
	$(".HowardOverlay").css('visibility', 'visible');
	// el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";

	console.log("clicked");
}

$('.CloseHoward').on('click', function(){

	hideoverlay();
});

});



function hideoverlay() {
	
	$(".HowardOverlay").css('visibility', 'hidden');
}
