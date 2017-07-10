$(document).ready( function(){

	//ocultando flecha
	$(".js-back").hide();

	//función printNews
	(function printNews(){
		$(".title-news").append('<span>NUEVAS RECETAS</span>');
	})();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);

	//se recorre el arreglo
	recipesArray.forEach(function(element){
		if (element.highlighted == true){
			//console.log("indice: " + recipesArray.indexOf(element));

			//definimos el parámetro de la función renderRecipe
			var parametro = recipesArray[recipesArray.indexOf(element)];

			//se llama la función renderRecipe
			renderRecipe(parametro);
		}
	})
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	console.log("id: " + recipesArray.indexOf(recipe));

	//definimos una id

	//creamos el html con DOM
	$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">' + recipe.title + '</span><span class="metadata-recipe"><span class="author-recipe">' + recipe.source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span> </span></span></span><img src="img/recipes/320x350/' + recipe.name + '.jpg" /></a>')
	//'<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">' + recipe.title + '</span></span></a>')//.append('<span class="title-recipe">' + recipe.title + '</span>')//.append('<span class="metadata-recipe"></span>').append('<span class="author-recipe">' + recipe.source.name + '</span>').append('<span class="bookmarks-recipe"></span>').append('<span class="icon-bookmark"></span>');

	/*$(".item-recipe").append('<span class="attribution"></span>').append('<img src="img/recipes/320x350/' + recipe.name + '.jpg" />');
	$(".attribution").append('<span class="title-recipe"></span>').append('<span class="metadata-recipe"></span>');
	$(".metadata-recipe").append('<span class="author-recipe"></span>').append('<span class="bookmarks-recipe"></span>');
	$(".bookmarks-recipe").append('<span class="icon-bookmark"></span>');

	$(".title-recipe").append(recipe.title);
	$(".author-recipe").append(recipe.source.name);*/

	//el div con clase "list-recipes" adopta lo hecho en el DOM
	//$(".list-recipes").append($(".item-recipe"));

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


