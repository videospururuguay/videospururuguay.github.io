// En este caso no es necesario, pero puedes agregar funcionalidades si las necesitas

// Ejemplo de funcionalidad futura:

document.querySelectorAll('.playlist a').forEach(link => {

    link.addEventListener('click', () => {

        console.log(`Abriendo playlist: ${link.textContent}`);

    });

});
