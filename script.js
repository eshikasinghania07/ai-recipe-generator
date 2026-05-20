async function searchRecipe() {
  let query = document.getElementById("searchInput").value.trim();
  localStorage.setItem("lastSearch", query);
  let diet = document.getElementById("diet")?.value;
  let cuisine = document.getElementById("cuisine")?.value;
  let resultDiv = document.getElementById("recipe-result");
  let spinner = document.getElementById("loading-spinner");

  if (!query) {
    resultDiv.innerHTML = "<p>Please enter a dish name.</p>";
    return;
  }

  // Show spinner
  spinner.style.display = "block";
  resultDiv.innerHTML = "";

  let apiKey = "247d5e251d084d4695f229c7ce8153c9"; 
  let url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=9&addRecipeInformation=true&apiKey=${apiKey}`;

  // Add Veg/Non-Veg filter
  if (diet === "vegetarian") {
    url += "&diet=vegetarian";
  } else if (diet === "non-vegetarian") {
    url += "&diet=omnivore";
  }

  // Add Cuisine filter
  if (cuisine) {
    url += `&cuisine=${cuisine}`;
  }

  try {
    let response = await fetch(url);
    let data = await response.json();

    // Hide spinner
    spinner.style.display = "none";

    if (!data.results || data.results.length === 0) {
      resultDiv.innerHTML = "<p>No recipes found. Try another dish!</p>";
      return;
    }

    resultDiv.innerHTML = "";
    data.results.forEach(recipe => {
      resultDiv.innerHTML += `

<div class="recipe-card">

    <img src="${recipe.image}" alt="${recipe.title}">

    <h2>${recipe.title}</h2>

    <a href="https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}" target="_blank">

        <button class="view-btn">
            View Recipe
        </button>

    </a>

    <button 
    class="fav-btn"
    onclick="addToFavorites(
    '${recipe.title}',
    '${recipe.image}'
    )">

    ❤️ Add to Favorites

    </button>

</div>

`;
    });

  } catch (error) {
    console.error(error);
    spinner.style.display = "none";
    resultDiv.innerHTML = "<p>Error fetching recipe. Please try again later.</p>";
  }
}
function addToFavorites(title, image){

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push({
        title: title,
        image: image,
        link: "index.html"
    });

    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert("Recipe added to favorites ❤️");

}
