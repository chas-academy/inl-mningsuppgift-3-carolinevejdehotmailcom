const button = document.getElementById("addButton")
const productInput = document.getElementById("productInput")
const priceInput = document.getElementById("priceInput")
const cartList = document.getElementById("cartList")

const cart = [];

function addToCart (productName,price){
let found = false;
for (const item of cart){
    if (item.productName===productName){
        item.quantity += 1;
        found =true
    }
}    
if (!found) {
    cart.push({productName, price, quantity: 1});
}
}

function renderCart(){
    cartList.innerHTML="";
    for (const item of cart){
        const li=document.createElement("li")
        li.innerHTML = `${item.productName} - ${item.price}kr (x${item.quantity})`
        cartList.appendChild(li);
    }
}

button.addEventListener("click", () => {
  const name  = productInput.value;        
  const price = Number(priceInput.value);

  addToCart(name, price);   
  productInput.value = "";
  priceInput.value = "";
  productInput.focus();

  renderCart();
})



