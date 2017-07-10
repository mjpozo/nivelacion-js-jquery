$(document).ready(function(){

	//mensaje al cargar la página
	console.log("recipe.html cargado");

	//ocultando menu
	$(".js-menu").hide();

	//como make ya esta en la clase del div, al apretar el boton "make it" la borramos primero y después inmediatamente añadimos la clase otra vez
	$(".js-show-make").click(function(){
		$(".page.recipe").removeClass("make");
		$(".page.recipe").addClass("make");
	});

	//se quita la clase make en el boton "recipe"
	$(".js-show-recipe").click(function(){
		$(".page.recipe").removeClass("make");
	});




});