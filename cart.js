let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cartContainer");

let total = 0;

if(cart.length === 0){

  container.innerHTML = "<h2>Your cart is empty 🛒</h2>";

}

else{

  cart.forEach(item => {

    total += item.price;

    container.innerHTML += `

      <div class="cart-card">

        <img src="${item.image}">

        <h3>${item.title}</h3>

        <p>₹${item.price}</p>

      </div>

    `;

  });

}

document.getElementById("totalPrice").innerText =
"Total: ₹" + total;

function checkout(){

  alert("Proceeding to payment 💳");

  window.location.href = "checkout.html";

}
