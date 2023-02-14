function escrita(tag) {
    tituloArray = tag.innerHTML.split('')
    tag.innerHTML = ''

    tituloArray.forEach((letra, i) => {
        setTimeout(() => {
            tag.innerHTML += letra
        }, i * 75)
    })
}

const titulo = document.querySelector('[data-titulo]')

escrita(titulo);