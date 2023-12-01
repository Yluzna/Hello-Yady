
let listaDeParticipantes = [
    "Roxana", "Yesenia", "Jose", "Viviana", "Anzuly",
   
    
  ];
  let participantesEliminados = [];
  let angulos = {};

  function crearParticipantes() {
    const wheel = document.getElementById('wheel');
    wheel.innerHTML = '';

    const paso = 360 / listaDeParticipantes.length;
    listaDeParticipantes.forEach((nombre, index) => {
      const participant = document.createElement('div');
      participant.className = 'participant';
      participant.textContent = nombre;
      participant.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      participant.style.transform = `rotate(${paso * index}deg) translate(150px) rotate(-${paso * index}deg)`;
      participant.onclick = function() {
        eliminarParticipanteSeleccionado(nombre);
      };
      wheel.appendChild(participant);
      angulos[nombre] = paso * index;
    });
  }
  crearParticipantes();

  function seleccionarParticipante() {
    if (listaDeParticipantes.length === 0) {
      alert("¡Todos los participantes han jugado!");
      return;
    }

    const indiceGanador = Math.floor(Math.random() * listaDeParticipantes.length);
    const ganador = listaDeParticipantes.splice(indiceGanador, 1)[0];
    participantesEliminados.push(ganador);
    
    document.getElementById('resultado').innerText = "El participante GANADOR es: " + ganador;
    alert("¡El participante ganador es: " + ganador + "!");
  }

  function reiniciarRuleta() {
    listaDeParticipantes = participantesEliminados.concat(listaDeParticipantes);
    participantesEliminados = [];
    document.getElementById('resultado').innerText = "¡Presiona el botón para seleccionar un nombre!";
    crearParticipantes();
  }

  function agregarParticipante() {
    const nombreNuevo = document.getElementById('nombreNuevo').value.trim();
    if (nombreNuevo !== "") {
      listaDeParticipantes.push(nombreNuevo);
      document.getElementById('nombreNuevo').value = "";
      actualizarSelectEliminar();
      crearParticipantes();
    }
  }

  function eliminarParticipante() {
    const indice = document.getElementById('nombreEliminar').selectedIndex;
    if (indice !== -1) {
      const participanteEliminado = listaDeParticipantes.splice(indice, 1)[0];
      actualizarSelectEliminar();
      reiniciarRuleta();
      alert("¡Se ha eliminado al participante: " + participanteEliminado + "!");
    }
  }

  function eliminarParticipanteSeleccionado(nombre) {
    const index = listaDeParticipantes.indexOf(nombre);
    if (index !== -1) {
      listaDeParticipantes.splice(index, 1);
      participantesEliminados.push(nombre);
      crearParticipantes();
    }
  }

  function actualizarSelectEliminar() {
    const selectEliminar = document.getElementById('nombreEliminar');
    selectEliminar.innerHTML = "";
    listaDeParticipantes.forEach((nombre, index) => {
      const option = document.createElement('option');
      option.text = nombre;
      option.value = index;
      selectEliminar.add(option);
    });
  }