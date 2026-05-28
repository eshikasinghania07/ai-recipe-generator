let statusText = document.getElementById("status");
let progress = document.getElementById("progress");

setTimeout(() => {
    statusText.innerHTML = "🍳 Preparing your food...";
    progress.style.width = "30%";
}, 2000);

setTimeout(() => {
    statusText.innerHTML = "🛵 Out for Delivery...";
    progress.style.width = "70%";
}, 5000);

setTimeout(() => {
    statusText.innerHTML = "🎉 Delivered Successfully!";
    progress.style.width = "100%";
}, 8000);

function goHome(){
    window.location.href = "recipes.html";
}
