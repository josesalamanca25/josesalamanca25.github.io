// Selección por ID
const titulo = document.getElementById('miTitulo');

// Selección por clase
const elementos = document.getElementsByClassName('miClase');

console.log(titulo)
            
console.log(elementos)

// Seleccionar un elemento
let boton = document.getElementById("miBoton");

// Agregar un evento de clic
boton.addEventListener("click", function() {
    titulo.innerHTML = 'Nuevo Título Modificado <a href="http://youtube.com">oprime</a>';
});

titulo.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});

document.addEventListener("keydown", function(evento) {
    console.log("Tecla presionada: " + evento.key);
});
   


let boton2= document.getElementById("miboton2"); 
let boton3= document.getElementById("miboton3");
let caja = document.getElementById("miCaja");

miBoton2.addEventListener ("click", function(){
    caja.style.backgroundColor="yellow"
});

miBoton3.addEventListener ("click", function(){
    caja.style.backgroundColor="aqua"
});

let boton4= document.getElementById("nuevodiv")

boton4.addEventListener("click", function() {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.textContent = 'Soy un nuevo DIV';
    caja.appendChild(nuevoDiv);    
});

let boton5= document.getElementById("borrardiv")

boton5.addEventListener("click", function() {
    const elementoParaEliminar = document.querySelector('div');
    elementoParaEliminar.remove();
});    





