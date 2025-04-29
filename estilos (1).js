// Seleccionar el elemento
let caja = document.getElementById("miCaja");
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")

function agregar(){
    // Agregar una clase
    caja.classList.add("highlight");
}

function quitar(){
    caja.classList.remove("highlight");
}

boton2.addEventListener("click", quitar)
boton3.addEventListener("click", function() {
    caja.style.display="none"     
    caja.style.display="block"     
 });

 boton4.addEventListener("click", function() {
 caja.style.display= "block"
 caja2.style.display="none"

 });

 var nombre= "jose"
 var apellido= "sala"

let apellido=