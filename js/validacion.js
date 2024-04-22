const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const texto = document.getElementById('mensagem');
const botonSubmit = document.querySelector('.formcontacto__boton');

botonSubmit.addEventListener('click',()=>{
    if (nombre.value =='' || email.value == '' || asunto.value == '' || texto.value == ''){
        alert("Hay campos sin completar , Intentalo nuevamente !")

    }
})
