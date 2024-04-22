document.addEventListener('mousemove', function (ev) {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const perfil = document.querySelector('.contenedor__aside');
    const central = document.querySelector('.central');
    const logo = document.querySelector('.logo');
    if (ev.clientX < 240 && currentScrollTop < 270) {
        perfil.classList.add('active');
        central.classList.add('left');
    } else {
        perfil.classList.remove('active');
        central.classList.remove('left');

    }


})