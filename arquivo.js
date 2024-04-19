/* 1.VARIÁVEIS: São Espaços da memória do computador, reservado para guardar uma informação. No js elas são de 3 tipos:
  let: Pode alterar o valor quando quiser.
  const:Valor não pode ser usado novamente, sendo um valor constante.
  var: Código antigo, está descontinuado/não usar.

  Obs. O nome de uma variável deve ser escrito com letra minúscula. Mas tiver mais de um nome, não pode haver espaço entre em nomes, colocando os demais nomes juntos, iniciando com letra maiúscula.
  Também não é permitido iniciar uma variável com número. E uma variável não pode ter o mesmo nome, dentro de um mesmo código, independente ser for do tipo "let" ou "const".
  */
let abacate = "fruta"
const numeroDeAlunos = "40"

console.log(abacate)
console.log(numeroDeAlunos) /*dentro do parentese de um console.log não se coloca aspas, pois para o js, entre aspas, se coloca apenas textos.*/

/* 2.TIPOS DE DADOS:
   2.1. Strings("TEXTOS"): No Js para escrever um texto, tem que colocar com "aspas duplas", ou com 'aspas simples'; ou a `crase`, que ao ser usada, permite pular linha, e no Js é chamada de Template Literals ou Template String.

   2.2. Template String: Dados de texto que utiliza a crase, além de possibilitar pular as linhas, uma outra função da "Template String" é a possibilidade de colocar uma variável dentro dela junto com o texto. Para isso a variável deve está dentro do ${}, como no exemplo abaixo:   
*/ 
const myAge = 30
const myString = `Minha idade é ${myAge}`

console.log(myString)

/* 2.3. Numbers("NÚMEROS"): É possível colocar qualquer número, podendo também colocar números fracionados, separados nesse caso, por ponto e não vírgula. No número não se coloca aspas, pois aspas é sempre texto. E também é possível somar(+), subtrair(-), dividir(/), ou multiplicar(*). Como nos exemplos abaixo.
*/ 
const number1 = 1426
const number2 = 15.35
const number3 = 25*5

console.log(number3)

/* 2.4. Boolean: Valor "true" verdadeiro ou "false" falso.
*/

/* 2.5.Object(OBJETOS): Todo o objeto tem uma propriedade que tem um valor. Por exemplo, a propriedade nome, tem o valor Marcus. Com o "object" é possível agrupar informações no mesmo lugar, que é chamado de objeto. Para criar um objeto, dentro da variável let ou const coloca o {} com as informações do objeto dentro, separadas por vírgulas. Como no exemplo a baixo.
*/
const name = "Marcus"
const age = 30
const address = "Travessa São Sebastião, número 339."

const marcus = {
  name: "Marcus",
  age: 30,
  sddress: "Travessa São Sebastião, número 339."
}
console.log(marcus)

/* Também é possível colocar um objeto dentro do objeto, colocando também no {}, como abaixo. */

const marcos = {
  name: "Marcus",
  age: 30,
  sddress: {
    street: "Travessa São Sebastião",
    number: 339,
    city: "Vigia",
    state: "Pará",
    country: "Brasil"
  }
}
console.log(marcos)

/*E ainda é possível navegar dentro do objeto para buscar uma informação específica, para isso, no nome do console.log da um ponto que o js vai completar com as propriedades que tem dentro dele, como abaixo*/

console.log(marcos.sddress.street)

/*É possível trocar um item interno do objeto, como abaixo.*/ 

marcos.sddress.number = 360
console.log(marcos) 


/* 2.6. Null & Undefined(NULO e INDEFINIDO): É  a ausencia de alguma informação. O "Null", quando de proposito é deixado alguma informação vazia, ou nula. Podendo acrescentar posteriormente a informação. */ 

let manga = {
  name: "Marcus",
  age: 30,
  sddress: null
}
console.log(manga)
manga.sddress = "Bela Vista"

/*O "Undefined" é uma mensagem de erro quando não aparece alguma informação. Como abaixo.*/

let fruta =  {
  name: "Açaí",
  cor: "roxo",
}

console.log(fruta.preço) /* Procurei por preço, porém não tem essa informação no let fruta.*/ 

/* 3. ESTRUTURA DE DADOS: É possível organizar os dados em algumas estruturas.
   3.1. Array(Uma "caixa" de VARIEDADE): O "Array" é umas estrutura de dados que serve para guardar varios dados em um lugar só. Para cria-lo tem que colocar entre [], separado por vírgulas. No "Arrey" começa a contar as posições dentro do cochete pelo zero. Sendo também possível alterar um item. Como abaixo. */ 

const banana = [ 20, "Casa da avó", 490, 5]
console.log(banana[1]) /*A posição 1 é "Casa da avó", pois a contagem começa do zero.*/

banana[2] = "Minha casa" 
console.log(banana)/*Fiz a alteração da posição: A posição 2 que era 490, passou a ser "Minha casa"*/

/*É possivel colocar objetos dentro do "Arrey", podendo acessar um item específico e até altera-lo. Como abaixo que a idade do item 2 foi alterado.*/

const uva = [
  {name:"Maria", age: 25},
  45,
  {name:"Nonato", age: 35}
]
uva[2].age = 30
console.log(uva) /* a idade do item 2 foi alterado.*/

console.log(uva[0].name) /*o nome do item 0 foi acessado.*/











