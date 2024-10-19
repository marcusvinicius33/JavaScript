/* 5.0. DOM(Document Object Model), É a ÁRVORE DE ELEMENTOS DO NAVEGADOR, todo o código HTML e CSS, inscrito em um site, que será manipulado pelo JS.*/

/* OBS. Para conectar o código "JavaScript" ao site é necessária adicionar na "html", seja abaixo do "body" ou no "head" a tag: <script src="./"></script>.
*/
/* OBS. No "JavaScript" o "HTML" é chamado de "document", ou seja, sempre que pelo JS, for preciso manipular um arquivo "html", é preciso se referenciar a ele como "document". Ex. "document.getElementById" */

/* 1.0. getElementById: Trás UM elemento pelo "id".*/
const input = document.getElementById("main-input")
console.log(input) 

/* 2.0. getElementsByClassName: Trás todos os elementos com essa "class"*/
const elements = document.getElementsByClassName("paragraph-js")
console.log(elements)

/* 3.0. getElementsByTagName: Trás TODOS os elementos com a "tag" escolhida.*/
const element = document.getElementsByTagName("button")
console.log(element)

/* 4.0. getElementsByName: Trás TODOS os elementos com o mesmo "name"*/
const nomeCompleto = document.getElementsByName("nome-completo")
console.log(nomeCompleto)

/* 5.0. querySelector: É um seletor que só TRÁS UM elemento, o primeiro que encontrar, seja tag, class(colocando o "." pra identificar que é uma class), id (colocando o "#" pra identificar que é uma id). podendo expecificar exatamente o que se quer. Como no exemplo abaixo que ele buscou um  "button" com a "class" main-button. */

const abacate = document.querySelector("button.main-button")
console.log(abacate)

/* 6.0. querySelectorAll: Trás TODOS os elementos que encontrar.*/

const uva = document.querySelectorAll("p")
console.log(uva)

/* 7.0 Alterando e Acessando textos no HTML:

textContent: Pega todo o conteúdo.
innerText: Pega apenas o texto.
innerHTML: Permite adicionar HTML E Texto.*/

const elemento = document.querySelector(".paragraph-js")

//elemento.textContent = "Novo texto."

console.log(elemento.textContent)//Leva em conta o HTML.
console.log(elemento.innerText) //Leva em conta o CSS.
console.log(elemento.innerHTML) //TRÁS TUDO e permite adicionar HTML

/* 8.0. Alterando CSS(estilos) no JavaScript: Além de alterar um elemento "html" usando o Js, também é possivel fazer o mesmo com a "css", como nos exemplos abaixos. Para visualizar basta tirar dos comentarios. */

/*const button = document.querySelector(".main-button")

button.style.color = "white"
button.style.backgroundColor = "rgb(24, 24, 106)"

const h1 = document.querySelector("h1")
h1.style.color = "red" 

const body = document.querySelector("body")

body.style.backgroundColor = " rgb(225, 150, 255)" */

/* 9.0. EVENTOS: Tudo o que acontece numa página web é um evento. Para isso, é preciso avisar na "html" quando eu quero que seja notado um evento. Ao mesmo tempo, no JavaScript, esse evento é ligado através de uma função, como no exemplo abaixo, que foi adicionado ao "button" da "html" o evento "onclick" (botão clicado): "button onclick="cliqueiNoBotao()". 
Esse evento foi ligado a função abaixo: "function cliqueiNoBotao(){ alert("Botão clicado com sucesso.")}", fazendo com que sempre que o botão for clicado a mensagem de alerta apareça. */

function cliqueiNoBotao(){
    alert("Botão clicado com sucesso!")
}

/* Outro exemplo usando o evento "onkeypress" > Uma tecla é pressionada,  no "input" da "html", ligando a uma função no Js.*/

const meuInput = document.querySelector("#main-input")

function digiteiNoInput(){
    console.log(meuInput.value)
}
function cliqueiNoBotao(){
    console.log(meuInput.value)
}




