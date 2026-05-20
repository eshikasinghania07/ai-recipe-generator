function saveMeal(type){

    let input = document.getElementById(type + "Input").value;

    localStorage.setItem(type, input);

    displayMeals();

    alert(type + " saved successfully 🍱");

}

function displayMeals(){

    document.getElementById("breakfastMeal").innerHTML =
    "Saved Meal: " + (localStorage.getItem("breakfast") || "None");

    document.getElementById("lunchMeal").innerHTML =
    "Saved Meal: " + (localStorage.getItem("lunch") || "None");

    document.getElementById("dinnerMeal").innerHTML =
    "Saved Meal: " + (localStorage.getItem("dinner") || "None");

}

window.onload = displayMeals;