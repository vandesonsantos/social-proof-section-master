# Frontend Mentor - Social proof section

[<img src="./\src\imagens/tela-readme.gif" target="_blank">](https://vandesonsantos.github.io/social-proof-section-master/) 

## Bem-Vindos! 👋

Projeto realizado na comunidade de desenvolvedores Desbravando a Programação (uma comunidade que estimula o trabalho em equipe, simulando o mercado de trabalho) com a colaboração da [@AnaNazario] <https://github.com/ananazario>.  Design Frontend Mentor, uma landing page - Social Proof Section. 

Incrementado ao projeto um script de animação com efeito de escrita para o título.


## Tecnologias Utilizadas
- Marcação HTML5 semântica
- Propriedades personalizadas CSS
- Flexbox
- JavaScript


## Quer Utilizar o Script Usado no Projeto?
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

## Deploy Do Projeto
- [GitHub Pages](https://vandesonsantos.github.io/social-proof-section-master/)  


**Divirta-se!** 🚀
