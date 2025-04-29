const cart = [];
  const cartItemsEl = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");
  const cartCountEl = document.getElementById("cart-count");

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ name, price, qty: 1 });
      }
      updateCartUI();
    });
  });

  function updateCartUI() {
    cartItemsEl.innerHTML = "";
    let total = 0;
    let count = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} x${item.qty} - $${(item.price * item.qty).toFixed(2)}`;
      cartItemsEl.appendChild(li);
      total += item.price * item.qty;
      count += item.qty;
    });
    cartTotalEl.textContent = total.toFixed(2);
    cartCountEl.textContent = count;
  }

  // Modal logic
  const cartIcon = document.getElementById("cart-icon");
  const cartModal = document.getElementById("cart-modal");
  const closeModal = document.querySelector(".close-button");

  cartIcon.addEventListener("click", () => {
    cartModal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == cartModal) {
      cartModal.style.display = "none";
    }
  });






/*uno */
  let boton1 = document.getElementById("libro1")
let diseño1 = document.getElementById("diseño1")
let quitar1 = document.getElementById("quitar1");


boton1.addEventListener("click", function (){
   

   diseño1.style.backgroundColor = "gray";
   diseño1.style.position = "fixed";
   diseño1.style.top = "50px";
   diseño1.style.left = "330px";
   diseño1.style.width = "50vw";
   diseño1.style.height = "90vh";
   diseño1.style.zIndex = "9999";
   diseño1.style.display = "flex";
   diseño1.style.alignItems = "center";
   diseño1.style.justifyContent = "center";
   diseño1.style.color = "white";
   diseño1.style.fontSize = "2rem";




})


function elimina(){
   quitar1.remove();
   diseño1.remove()
}






/*dos*/

let boton2 = document.getElementById("libro2")
let diseño2 = document.getElementById("diseño2")
let quitar2 = document.getElementById("quitar2");

boton2.addEventListener("click", function(){
   

   diseño2.style.backgroundColor = "gray";
   diseño2.style.position = "fixed";
   diseño2.style.top = "50px";
   diseño2.style.left = "330px";
   diseño2.style.width = "50vw";
   diseño2.style.height = "90vh";
   diseño2.style.zIndex = "9999";
   diseño2.style.display = "flex";
   diseño2.style.alignItems = "center";
   diseño2.style.justifyContent = "center";
   diseño2.style.color = "white";

})

function elimina2(){
   quitar2.remove();
   diseño2.remove()
}







/* tres */

let boton3 = document.getElementById("libro3")
let diseño3 = document.getElementById("diseño3")
let quitar3 = document.getElementById("quitar3");

boton3.addEventListener("click", function(){
   

   diseño3.style.backgroundColor = "gray";
   diseño3.style.position = "fixed";
   diseño3.style.top = "50px";
   diseño3.style.left = "330px";
   diseño3.style.width = "50vw";
   diseño3.style.height = "90vh";
   diseño3.style.zIndex = "9999";
   diseño3.style.display = "flex";
   diseño3.style.alignItems = "center";
   diseño3.style.justifyContent = "center";
   diseño3.style.color = "white";
   diseño3.style.fontSize = "2rem";

})

function elimina3(){
   quitar3.remove();
   diseño3.remove()
}




/*cuatro*/

let boton4 = document.getElementById("libro4")
let diseño4 = document.getElementById("diseño4")
let quitar4 = document.getElementById("quitar4");

boton4.addEventListener("click", function(){
   

   diseño4.style.backgroundColor = "gray";
   diseño4.style.position = "fixed";
   diseño4.style.top = "50px";
   diseño4.style.left = "330px";
   diseño4.style.width = "50vw";
   diseño4.style.height = "90vh";
   diseño4.style.zIndex = "9999";
   diseño4.style.display = "flex";
   diseño4.style.alignItems = "center";
   diseño4.style.justifyContent = "center";
   diseño4.style.color = "white";
   diseño4.style.fontSize = "2rem";

})

function elimina4(){
   quitar4.remove();
   diseño4.remove()
}









/*cinco */
let boton5 = document.getElementById("libro5")
let diseño5 = document.getElementById("diseño5")
let quitar5 = document.getElementById("quitar5");

boton5.addEventListener("click", function(){
   

   diseño5.style.backgroundColor = "gray";
   diseño5.style.position = "fixed";
   diseño5.style.top = "50px";
   diseño5.style.left = "330px";
   diseño5.style.width = "50vw";
   diseño5.style.height = "90vh";
   diseño5.style.zIndex = "9999";
   diseño5.style.display = "flex";
   diseño5.style.alignItems = "center";
   diseño5.style.justifyContent = "center";
   diseño5.style.color = "white";
   diseño5.style.fontSize = "2rem";

})
function elimina5(){
   quitar5.remove();
   diseño5.remove();
}






/*seis */
let boton6 = document.getElementById("libro6")
let diseño6 = document.getElementById("diseño6")
let quitar6 = document.getElementById("quitar6");

boton6.addEventListener("click", function(){
   

   diseño6.style.backgroundColor = "gray";
   diseño6.style.position = "fixed";
   diseño6.style.top = "50px";
   diseño6.style.left = "330px";
   diseño6.style.width = "50vw";
   diseño6.style.height = "90vh";
   diseño6.style.zIndex = "9999";
   diseño6.style.display = "flex";
   diseño6.style.alignItems = "center";
   diseño6.style.justifyContent = "center";
   diseño6.style.color = "white";
   diseño6.style.fontSize = "2rem";

})
function elimina6(){
   quitar6.remove();
   diseño6.remove();
}




/*siete */
let boton7 = document.getElementById("libro7")
let diseño7 = document.getElementById("diseño7")
let quitar7 = document.getElementById("quitar7");

boton7.addEventListener("click", function(){
   

   diseño7.style.backgroundColor = "gray";
   diseño7.style.position = "fixed";
   diseño7.style.top = "50px";
   diseño7.style.left = "330px";
   diseño7.style.width = "50vw";
   diseño7.style.height = "90vh";
   diseño7.style.zIndex = "9999";
   diseño7.style.display = "flex";
   diseño7.style.alignItems = "center";
   diseño7.style.justifyContent = "center";
   diseño7.style.color = "white";
   diseño7.style.fontSize = "2rem";

})
function elimina7(){
   quitar7.remove();
   diseño7.remove();
}






/*ocho */
let boton8 = document.getElementById("libro8")
let diseño8 = document.getElementById("diseño8")
let quitar8 = document.getElementById("quitar8");

boton8.addEventListener("click", function(){
   

   diseño8.style.backgroundColor = "gray";
   diseño8.style.position = "fixed";
   diseño8.style.top = "50px";
   diseño8.style.left = "330px";
   diseño8.style.width = "50vw";
   diseño8.style.height = "90vh";
   diseño8.style.zIndex = "9999";
   diseño8.style.display = "flex";
   diseño8.style.alignItems = "center";
   diseño8.style.justifyContent = "center";
   diseño8.style.color = "white";
   diseño8.style.fontSize = "2rem";

})
function elimina8(){
   quitar8.remove();
   diseño8.remove();
}






/*nueve */
let boton9 = document.getElementById("libro9")
let diseño9 = document.getElementById("diseño9")
let quitar9 = document.getElementById("quitar9");

boton9.addEventListener("click", function(){
   

   diseño9.style.backgroundColor = "gray";
   diseño9.style.position = "fixed";
   diseño9.style.top = "50px";
   diseño9.style.left = "330px";
   diseño9.style.width = "50vw";
   diseño9.style.height = "90vh";
   diseño9.style.zIndex = "9999";
   diseño9.style.display = "flex";
   diseño9.style.alignItems = "center";
   diseño9.style.justifyContent = "center";
   diseño9.style.color = "white";
   diseño9.style.fontSize = "2rem";

})

function elimina9(){
   quitar9.remove();
   diseño9.remove();
}






/*
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5); 
z-index: 9999; 
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 2rem;

 diseño.style.backgroundColor = "rgb(11, 219, 230)";
   diseño.style.position = "fixed";
   diseño.style.top = "50px";
   diseño.style.left = "330px";
   diseño.style.width = "50vw";
   diseño.style.height = "90vh";
   diseño.style.zIndex = "9999";
   diseño.style.display = "flex";
   diseño.style.alignItems = "center";
   diseño.style.justifyContent = "center";
   diseño.style.color = "white";
   diseño.style.fontSize = "2rem";
*/
