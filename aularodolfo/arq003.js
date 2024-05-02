/* 0.1. AddEventListener: Adicionar OUVINTE de Eventos, É uma ferramenta do Js que aguarda um Evento acontecer. Avisando, notificando, quando acontece. */

const input = document.querySelector("#main-input")
const select = document.querySelector ("select")
const button = document.querySelector(".main-button")

select.addEventListener("change", function(){
    console.log("Troquei de valor")
}) 
/* ESSA É UMA ESTRUTURA DO "AddEventListener". Nesse caso com o evento "change", MUDAR, trocar. O "AddEventListener" Avisa quando há uma mudança no valor selecionado. Para isso É necessário que se coloque uma função anonima. Como no exemplo.*/


function troqueiDeValor(event){
    console.log(event)
/*Exemplo a*/
input.addEventListener("keypress", troqueiDeValor)
select.addEventListener("change", troqueiDeValor)
/*Exemplo b*/
button.addEventListener("click", function(event){
    console.log(event)
})

/* OBS. Usando as "function" funções, é possivel colher, receber informações,ou dados dos eventos. Para isso é possível, através da extrutura acima. Tendo duas formas de obter essas informações, tanto pelo exemplo "a" como pelo exemplo "b" */