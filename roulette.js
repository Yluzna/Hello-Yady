let listaDePersonas = ["José", "Roxana", "Anzuly", "Viviana", "Yessenia"];
        let nombresSeleccionados = [];
    
        function seleccionarGanador() {
          if (listaDePersonas.length === 0) {
            document.getElementById('resultado').innerText = "¡Todos los nombres han sido seleccionados!";
            return;
          }
    
          const indiceGanador = Math.floor(Math.random() * listaDePersonas.length);
          const ganador = listaDePersonas.splice(indiceGanador, 1)[0];
          nombresSeleccionados.push(ganador);
          
          document.getElementById('resultado').innerText = "El ganador es: " + ganador;
        }
    
        function reiniciarRuleta() {
          listaDePersonas = nombresSeleccionados.concat(listaDePersonas);
          nombresSeleccionados = [];
          document.getElementById('resultado').innerText = "¡Presiona el botón para seleccionar un nombre!";
        }