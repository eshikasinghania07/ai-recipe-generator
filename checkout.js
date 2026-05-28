function placeOrder(){

  alert("🎉 Order Placed Successfully!");

  localStorage.removeItem("cart");

  window.location.href = "tracking.html";

}
