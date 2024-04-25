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
