let username = localStorage.getItem("username");

document.getElementById("welcomeText").innerHTML =
`Welcome, ${username} 👋`;

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

/* AI Recommendation Logic */

let lastSearch = localStorage.getItem("lastSearch");

let recommendationText = document.getElementById("recommendationText");

if(lastSearch){

    if(lastSearch.toLowerCase().includes("pasta")){

        recommendationText.innerHTML =
        "Because you searched Pasta, we recommend Italian dishes 🍝";

    }

    else if(lastSearch.toLowerCase().includes("burger")){

        recommendationText.innerHTML =
        "Based on your interest in Burgers, try fast-food recipes 🍔";

    }

    else if(lastSearch.toLowerCase().includes("salad")){

        recommendationText.innerHTML =
        "Healthy salad recipes recommended for you 🥗";

    }

    else{

        recommendationText.innerHTML =
        "Explore personalized recipes based on your interests ✨";

    }

}else{

    recommendationText.innerHTML =
    "Search recipes to get AI-powered recommendations ✨";

}
function logout(){

    localStorage.removeItem("username");

    window.location.href = "login.html";

}
let recentSearch = localStorage.getItem("lastSearch");

if(recentSearch){

    document.getElementById("recentSearchText").innerHTML =
    `You recently searched for <b>${recentSearch}</b> recipes 🍽️`;

}