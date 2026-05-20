let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let container = document.getElementById("favoritesContainer");

if(favorites.length === 0){

    container.innerHTML = "<h2>No favorite recipes added yet.</h2>";

}else{

    favorites.forEach(recipe => {

        container.innerHTML += `
        
        <div class="recipe-card">

            <img src="${recipe.image}">

            <h3>${recipe.title}</h3>

            <a href="index.html" target="_blank">
                <button>View Recipe</button>
            </a>

        </div>
        
        `;
    });

}