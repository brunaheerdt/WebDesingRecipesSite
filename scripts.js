// Import Recipes Array (recipes_array.js needs to export the array)
import { recipes } from './recipes_array.js';


//Get the query parameter from the URL
  
export function getQueryParam(param) { //param - The parameter to retrieve from .
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}


//Renders the list of recipes for recipes.html

export function renderRecipes() {
  const recipeContainer = document.getElementById('recipesList');
  if (!recipeContainer) return; // Exit if the container isn't found

  recipes.forEach(recipe => {
    const recipeCard = `
          <div class="card mb-3 border-0">
           <div class="row g-0">
              <div class="col-md-4">
            <img src="${recipe.image}" class="img-fluid rounded image_menu p-3 " alt="${recipe.title}" />
          </div>
          <div class="col-md-8">
            <div class="card-body recipe-list-body">
              <h5 class="card-title">${recipe.title}</h5>
              <p class="card-text description">${recipe.exerpt}</p>
              <a href="therecipe.html?id=${recipe.id}" class="btn small btn-link text-body-secondary">Continue Reading</a>
            </div>
          </div>
        </div>
      </div>
    `;
    recipeContainer.innerHTML += recipeCard;
  });
}


 //Renders details of a selected recipe on therecipe.html

export function renderRecipeDetails() {
  const recipeId = getQueryParam('id'); // Get the recipe ID from the URL
  const recipe = recipes.find(r => r.id.toLowerCase() === recipeId?.toLowerCase());
  const container = document.getElementById('recipeDetails');
  if (!container) return; // Exit if the container isn't found
  if (recipe) {
    container.innerHTML = `
<div class="card border-0">
  <div class="d-flex justify-content-center p-3">
    <img src="${recipe.image}" class="card-img-top rounded" alt="${recipe.title}" style="max-width: 80%; height: auto; border-radius: 10px;">
  </div>
  <div class="card-body">
    <h5 class="card-title text-center">${recipe.title}</h5>
    <p class="card-text text-center">${recipe.exerpt}</p>
    <h6>Steps:</h6>
    <ol>
      ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
    </ol>
  </div>
</div>
    `;
  }
}


