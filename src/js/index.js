const titulo = document.querySelector('[data-titulo]')

function escrita() {
    tituloArray = titulo.innerHTML.split('')
    titulo.innerHTML = ''

    tituloArray.forEach((letra, i) => {
        setTimeout(() => {
            titulo.innerHTML += letra
        }, i * 75)
    })
}

escrita();