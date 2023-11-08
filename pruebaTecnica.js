let notas =[];

let crear = document.getElementById("botonCrear");
let contenidoNota = document.getElementById("textarea");
let contenedorPrincipal = document.getElementById("contenedorPrincipal");

crear.addEventListener("click", () => crearNota());
  




const crearNota = () => {
  if(contenidoNota.value){
    notas = notas.filter(e => e !== "");
    notas.push(contenidoNota.value);

    if(document.getElementById("notasContainer")){contenedorPrincipal.removeChild(document.getElementById("notasContainer"))}

    let notasContainer = document.createElement("div");notasContainer.setAttribute("id","notasContainer")
    let id = 0; 
    notas.forEach((e)=>{
      notasContainer.innerHTML +=`
      <div class="container" id="${id++}">
        <p>${e}</p>
        <button value ="borrar" onclick=borrarNota(event.target)>Borrar</button>
      </div>`
    });
    contenedorPrincipal.appendChild(notasContainer);
    contenidoNota.value = null;
  }else{
    alert("ingresa un valor")
  }
}
const borrarNota = (boton) => {
  let container = boton.closest(".container");
  notas.splice(container.id, 1 ,"");
  container.remove();
}