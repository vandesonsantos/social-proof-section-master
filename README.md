# Frontend Mentor - Social proof section

[<img src="./\src\imagens/tela-readme.gif" target="_blank">](https://vandesonsantos.github.io/social-proof-section-master/) 

## #Bem-vindos! 👋

Projeto realizado com a colaboração da [@AnaNazario] <https://github.com/ananazario>. Design Frontend Mentor, uma landing page - Social Proof Section. 

Incrementado ao projeto um script de animação com efeito de escrita para o título.


## #Tecnologias Utilizadas
- HTML
- CSS
- Java Script


## #Quer utilizar a animação usada no projeto?
```
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
```

## #Deploy Do Projeto
- [GitHub Pages](https://vandesonsantos.github.io/social-proof-section-master/)


**Have fun!** 🚀
