const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const texto = document.getElementById('mensagem');
const botonSubmit = document.querySelector('.formcontacto__boton');
const contenedorFormulario = document.querySelector('.formcontacto__form');

botonSubmit.addEventListener('click', (ev) => {
    if (nombre.value == '' || email.value == '' || asunto.value == '' || texto.value == '') {
        const error = document.createElement('h3');
        error.innerText = 'Hay campos sin completar , Intentalo nuevamente !'
        contenedorFormulario.appendChild(error);
        ev.preventDefault();
    }
})
