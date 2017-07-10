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
	console.log(recipe.name);

	//creamos el html con DOM
	$("a").addClass("item-recipe");
	$(".item-recipe").attr("href","#");

	$(".item-recipe").append('<span class="attribution"></span>').append('<img src="img/recipes/320x350/' + recipe.name + '.jpg" />');
	$(".attribution").append('<span class="title-recipe"></span>').append('<span class="metadata-recipe"></span>');
	$(".metadata-recipe").append('<span class="author-recipe"></span>').append('<span class="bookmarks-recipe"></span>');
	$(".bookmarks-recipe").append('<span class="icon-bookmark"></span>');

	$(".title-recipe").append(recipe.title);
	$(".author-recipe").append(recipe.source.name);

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


