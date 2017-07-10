$(document).ready(function(){

	//mensaje al cargar la página
	console.log("recipe.html cargado");

	//ocultando menu
	$(".js-menu").hide();

	//se añade la clase make en el boton "make it"
	$(".js-show-make").click(function(){
		$(".page.recipe").addClass("make");

		//clase active
		$(".js-show-make").addClass("active");
		$(".js-show-recipe").removeClass("active");
	});

	//se quita la clase make en el boton "recipe"
	$(".js-show-recipe").click(function(){
		$(".page.recipe").removeClass("make");

		//clase active
		$(".js-show-recipe").addClass("active");
		$(".js-show-make").removeClass("active");
	});




});