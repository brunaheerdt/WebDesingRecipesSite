$(document).ready(function () {
  const $recipesList = $("#recipes-list"); // Select the recipes list container

  // Check if the page has the container for listing recipes
  if ($recipesList.length) {
    // Load recipe data from the JSON file
    $.getJSON("recipes_array.json", function (recipes) {
      console.log("Loaded recipes array:", recipes); // checks  for recipes array
      
      // Load the card template
      $.get("recipemenutemplate.html", function (template) {
        console.log("Loaded card template:", template); // checks for template

        recipes.forEach(recipe => {
          // Replace placeholders in the template with actual recipe data
          const populatedTemplate = template
            .replace("{image}", recipe.image)
            .replace("{title}", recipe.title)
            .replace("{exerpt}", recipe.exerpt)
            .replace("{id}", recipe.id);

          console.log("Populated template for recipe:", recipe.title, populatedTemplate); // Logs each template
          
          // Append the populated template to the recipes list
          $recipesList.append(populatedTemplate);
        });
      });
    }).fail(function () {
      console.error("Failed to load recipes array.");
    });
  }

  // Checks if the page is the recipe details page
  const $recipeDetails = $("#recipeDetails");
  if ($recipeDetails.length) {
    const recipeId = getQueryParam('id'); // Gets the recipe ID from the URL
    console.log("Recipe ID from URL:", recipeId); // Logs recipe ID from the URL

    // Load recipe data from the JSON file
    $.getJSON("recipes_array.json", function (recipes) {
      console.log("Loaded recipes array for details page:", recipes); // Logs  recipes array

      const recipe = recipes.find(r => r.id.toLowerCase() === recipeId?.toLowerCase());
      console.log("Selected recipe for ID:", recipeId, recipe); // Logs selected recipe

      // If recipe exists, load the recipe details
      if (recipe) {
        $.get("recipe_template.html", function (template) {
          console.log("Loaded recipe details template:", template); // Logs template

          const stepsList = recipe.steps.map(step => `<li>${step}</li>`).join('');
          const populatedTemplate = template
            .replace("{image}", recipe.image)
            .replace("{title}", recipe.title)
            .replace("{exerpt}", recipe.exerpt)
            .replace("{steps}", stepsList);

          console.log("Populated details template for recipe:", recipe.title, populatedTemplate); // Logs populated template
          
          // Inserts the template into the container
          $recipeDetails.html(populatedTemplate);
        }).fail(function () {
          console.error("Failed to load recipe details template.");
        });
      } else {
        console.warn("Recipe not found for ID:", recipeId);
      }
    }).fail(function () {
      console.error("Failed to load recipes array for details page."); //failure log
    });
  }
});

//function to get query from the URL of the relevant template

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Handles  data stored in recipes_array.json
$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get('id');
  console.log("Recipe ID from query parameter:", recipeId); // Logs  recipe ID

  if (recipeId) {
    // Fetch the JSON data
    $.getJSON('recipes_array.json', function (recipes) {
      console.log("Loaded recipes array for single recipe:", recipes); // Logs recipes array

      // Find the recipe by ID
      const recipe = recipes.find(r => r.id === recipeId);
      console.log("Found recipe for ID:", recipeId, recipe); // Logs recipe

      if (recipe) {
        // Populate details
        $('#recipeTitle').text(recipe.title);
        $('#recipeImage').attr('src', recipe.image).attr('alt', recipe.title);
        $('#recipeExerpt').text(recipe.exerpt);

        console.log("Populated basic details for recipe:", recipe.title); // Logs details

        // Populate the ingredients list
        $('#ingredientsList').empty(); // Clear existing content
        recipe.ingredients.forEach(ingredient => {
          const ingredientItem = `<li class="list-group-item">${ingredient}</li>`;
          $('#ingredientsList').append(ingredientItem);
        });
        console.log("Populated ingredients list:", recipe.ingredients); // Logs ingredients list

        // Clear the steps container before use
        $('#stepsContainer').empty();

        // Loop through the steps array and add each step of the recipe
        recipe.steps.forEach((step, index) => {
          const stepElement = $('<div class="steps"></div>');
          stepElement.text(`Step ${index + 1}: ${step}`);
          $('#stepsContainer').append(stepElement);
        });
        console.log("Populated steps for recipe:", recipe.steps); // Log steps
      } else {
        console.warn("Recipe not found for ID:", recipeId);
        $('#recipeDetails').html('<p>Recipe not found.</p>');
      }
    }).fail(function () {
      console.error("Failed to load recipes array for single recipe.");
      $('#recipeDetails').html('<p>Error loading recipe data.</p>');
    });
  } else {
    console.warn("No recipe ID provided in the URL.");
    $('#recipeDetails').html('<p>No recipe ID provided.</p>');
  }
});
