const tabla = document.getElementById("tabla")

// Ejemplo de async/await
async function fetchData() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await respuesta.json();
    for(let valor of data){
 console.log(valor["title"])
const tablerow = document.createElement("tr")
const tabletittle = document.createElement("td")
const tablebody = document.createElement("td")
tabletittle.textContent = valor.title
tablebody.textContent= valor.body
tablerow.appendChild(tabletittle)
tablerow.appendChild(tablebody)
tabla.appendChild(tablerow)
    }
}

fetchData();





