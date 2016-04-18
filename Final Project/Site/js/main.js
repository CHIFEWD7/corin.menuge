$(".js-hamburger").on("click", function(e){
	e.preventDefault();
	$("body").addClass("active");
});

$(".js-close").on("click", function(e){
	e.preventDefault();
	$("body").removeClass("active");
});