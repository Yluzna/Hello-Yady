function agregarParticipante(event) {
  event.preventDefault(); // Evitar que se envíe el formulario
  
  var nombre = document.getElementById('nombre').value;

  if (nombre !== '') {
    var lista = document.getElementById('listaParticipantes');
    var nuevoParticipante = document.createElement('li');
    nuevoParticipante.appendChild(document.createTextNode(nombre));
    
    // Botón de eliminar
    var botonEliminar = document.createElement('button');
    botonEliminar.appendChild(document.createTextNode('X'));
    botonEliminar.onclick = function() {
      lista.removeChild(nuevoParticipante);
    };
    nuevoParticipante.appendChild(botonEliminar);
    (botonEliminar).style.color= '#900C3F';
    (botonEliminar).style.background= '#FFD146';
    (botonEliminar).style.border= 'none';
    (botonEliminar).style.margin= '10px';
    (botonEliminar).style.padding= '5px';
    (botonEliminar).style.borderRadius= '4px';



    lista.appendChild(nuevoParticipante);
    document.getElementById('nombre').value = '';
  }
}

var defaults = {
  scalar: 2,
  spread: 270,
  particleCount: 25,
  origin: { y: 0.4 },
  startVelocity: 35,
};

confetti({
  ...defaults,
  shapes: ["image"],
  shapeOptions: {
    image: {
      src: "https://particles.js.org/images/pumpkin.svg",
      replaceColor: true,
      width: 32,
      height: 40,
    },
  },
  colors: ["#ff9a00", "#ff7400", "#ff4d00"],
});
confetti({
  ...defaults,
  shapes: ["image"],
  shapeOptions: {
    image: {
      src: "https://particles.js.org/images/pine-tree.svg",
      replaceColor: true,
      width: 271,
      height: 351.5,
    },
  },
  colors: ["#8d960f", "#be0f10", "#445404"],
});
confetti({
  ...defaults,
  shapes: ["heart"],
  colors: ["#f93963", "#a10864", "#ee0b93"],
});