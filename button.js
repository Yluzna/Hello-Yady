const nombres = ["Max", "Alicia","Jose","Mercedes","Jander","Yessi","Anzu", "Neimy","Hanna","Isaac", "Juanjo","David","Paolo","Alba", "Joaco","Alberto","Denisse", "Alfredo","Alfredo", "Marcela","Laudy", "Victor","Yady","Alvaro", "Roxana","Elena"];

const btnGenerar = document.getElementById("btnGenerar");
const resultado = document.getElementById("resultado");

btnGenerar.addEventListener("click",  function (){

    const nombreAleatorio = obtenerNombreAleatorio(nombres);
    resultado.textContent = nombreAleatorio;
});


function obtenerNombreAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
  }