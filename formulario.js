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
      (botonEliminar).style.color= 'red';
      (botonEliminar).style.background= 'Yellow';
      

      lista.appendChild(nuevoParticipante);
      document.getElementById('nombre').value = '';
    }
  }


