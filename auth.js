document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    let username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location.href = "dashboard.html";

});
