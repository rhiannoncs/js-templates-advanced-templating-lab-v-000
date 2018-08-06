function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('display_ingredient', function(ingredient) {
  	return new Handlebars.SafeString("<li>" + ingredient + "</li>")})

  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += formTemplate({'action': 'createRecipe()'});
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
	var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
	document.getElementsByTagName("main")[0].innerHTML += recipeTemplate; 
}

function displayEditForm() {
	var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
	document.getElementsByTagName("main")[0].innerHTML += formTemplate;
}

function updateRecipe() {

}
