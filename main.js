
function tocaSom(idElementoAudio) {
    document.querySelector(`#som_${idElementoAudio}`).play()
}


const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
    tecla.addEventListener('click', () => tocaSom(tecla.classList[1]))

    tecla.onkeydown = function (event) {
        if (event.code == 'Space' || event.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
})

// var i = 0;
// while (i < listaDeTeclas.length) {
//     const tecla = listaDeTeclas[i]
//     tecla.onclick = () => tocaSom(tecla.classList[1])
//     i++;
// }

