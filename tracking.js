let statusText = document.getElementById("status");
let progress = document.getElementById("progress");

progress.style.width = "10%";

setTimeout(() => {
    statusText.innerHTML = "🍳 Preparing your food...";
    progress.style.width = "40%";
}, 2000);

setTimeout(() => {
    statusText.innerHTML = "🛵 Out for Delivery...";
    progress.style.width = "75%";
}, 5000);

setTimeout(() => {
    statusText.innerHTML = "🎉 Delivered Successfully!";
    progress.style.width = "100%";
}, 9000);

function goHome(){
    window.location.href = "recipes.html";
}
