// Obtiene el botón que activa el desplazamiento
let form = document.getElementById('cta-form');

// Agrega un evento de clic al botón para que haga scroll suave al formulario
form.addEventListener('click', function() {
  let formElement = document.getElementById('form');
  formElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave hacia el formulario
});

// Función que se ejecuta cuando se presiona el botón "Enviar"
function presionarBoton() {
  // Captura los valores de los campos del formulario
  let nombre = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let mensaje = document.getElementById('message').value;

  // Verifica si los campos están vacíos
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, complete todos los campos'); // Muestra alerta si hay campos vacíos
    return; // Detiene la función
  }

  // Muestra un mensaje de agradecimiento
  alert('Gracias por enviar tu mensaje, revisa la consola por favor');

  // Imprime los datos en la consola del navegador
  console.log({nombre, email, mensaje});

  // Limpia los campos del formulario
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
