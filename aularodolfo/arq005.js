/* 1.0. Math (MATEMÁTICA)

- pow POTÊNCIA
- sqrt RAIZ QUADRADA
- PI
- ceil/TETO ARREDONDAR PRA CIMA
- Floor/CHÃO ARREDONDAR PRA BAIXO
- random NÚMERO ALEATÓRIO ENTRE 0 E 1.

Exemplos:
*/
const result = Math.pow(2,2)
console.log(result) /*POTÊNCIA*/
const result2 = Math.sqrt(25,2)
console.log(result2) /*RAIZ QUADRADA*/
const result3 = Math.PI
console.log(result3) /*PI */
const result4 = Math.ceil(3.59)
console.log(result4) /*ARREDONDAR PRA CIMA*/
const result5 = Math.floor(2.45)
console.log(result5) /*ARREDONDAR PRA BAIXO*/
const result6 = Math.random()
console.log(result6) /*NÚMERO ALEATÓRIO ENTRE 0 E 1.*/

/* 2.0. Operadores Aritméticos 

+ ADIÇÃO
- SUBTRAÇÃO
/ DIVISÃO
* MULTIPLICAÇÃO
% RESTO: O número que sobra de uma divisão.
++ INCREMENTO: Adiciona mais um número.
-- DECREMENTO: Diminue um número.
** EXPONENCIAL: Multiplica duas vezes.
*/

const result7 = 11 % 3
console.log(result7) /*RESTO*/

let result8 = 20
result8++
console.log(result8) /*INCREMENTO: Não é possivel adicionar um incremento ou um decremento com o "const", por isso se o usou o "let". */

let result9 = 20
result9--
console.log(result9) /*DECREMENTO*/

let result10 = 3 ** 10
console.log(result10) /*EXPONENCIAL*/

/* 3.0. Operadores de Atribuição: é uma forma de "economizar" o código.

= ATRIBUIÇÃO
+ ADIÇÃO
- SUBTRAÇÃO
/ DIVISÃO
* MULTIPLICAÇÃO
% RESTO
*/

let result11 = 20
result11 += 70 //result11 = result11 + 70
console.log(result11) /* Numa operação, ao inves de escrever duas vezes o código, é possível "economiza-lo", adicionando o sinal correspondente, antes a atribuição. Como no exemplo. */

/* 4.0 Operadores de Comparação. 

== IGUAL: Compara o valor, mas não o tipo.
=== TOTALMENTE IGUAL: Compara o VALOR e o TIPO.

!= DIFERENTE: Ele compara o valor, mas não  o tipo.
!== TOTALMENTE DIFERENTE: Compara o VALOR e o TIPO.

*/
const primeiroNumero = 30
const segundoNumero = "30"

console.log(primeiroNumero === segundoNumero)

if(primeiroNumero == segundoNumero){
    console.log("Eles são iguais.")
} else {
    console.log("Não são iguais.")
}

/* 4.1 Operadores de Comparação. Parte2

> MAIOR
< MENOR

>= MAIOR ou IGUAL
<= MENOR ou IGUAL
*/
const priNumero = 30
const segNumero = 50
console.log(priNumero <= segNumero)

/* 5.0 Operadores Lógicos

&& -> E: O operador "E" Vai verificar todas as informações, se uma for falso todos serão falsos.

true && true = true
true && false = false
false && false = false
*/
console.log(true && false && true)

/*
|| -> OU: O operador "OU" Vai verificar todas as informações, se uma for verdadeiro, todos serão verdadeiros.

true || true = true
true || false = true
false || false = false
*/
console.log(true || true || false) 

const digitarASenha = false
const digitarOToker = true
const numeroDaConta = true

if(digitarASenha || digitarOToker || numeroDaConta){
    console.log("Logado com sucesso.")
} else{
    console.log("Autenticação FALHO.")
}

/*
! -> NEGAÇÃO: Sempre inverte o valor.

!true = false
!false = true
*/
console.log(!false)

/* 6.0. Operadores Type of e Delete.

Type of: Fala qual é o Tipo de dado, se é do tipo número ou texto ou objeto ou outros.
Delete: Deletar
*/
const myObject = {
    name: "Marcus",
    age: 35,
    address: "Rua dos bobos, número 0."
}
console.log( typeof myObject)

delete myObject.address
console.log(myObject)

/* 7.0. Else if: Dá outras opções. e é possivel usar quantos "Else if" quiser.*/

const temperature = 41

if (temperature === 36){
    console.log("Você está saudável")
} else if (temperature > 36 && temperature <= 40){
    console.log("Está com febre.")
} else if (temperature > 40){
    console.log("Está com muita febre.")
} else {
    console.log("Está com hipotermia.")
} 

/* 8.0. Operador Ternário: Forma de "encurtar código" é uma alternativa ao "if" e "else". Usado quando o código for pequeno, de uma linha.     

? if (se)
: else (se não)
&& if sem o else

*/
const salary = 12000

/*
if(salary <= 3000){
    console.log("O colaborador é Júnior.")
} else{
    console.log("O colaborador é Senior.")
}
*/
salary <= 3000 ? console.log("O colaborador é Júnior.") : console.log("O colaborador é Senior.")

salary <= 3000 && console.log("O colaborador é Júnior.") //quando for só o if usa o &&

/* É possível usar também o "else if", como no exemplo abaixo.
 
if(salary <= 3000){
    console.log("O colaborador é Júnior.")
} else if(salary >= 3000 && salary < 10000){
    console.log("O colaborador é Senior.")
} else{
    console.log("Ele é diretor.")
}
*/
salary <= 3000 ? console.log("O colaborador é Júnior.") : salary >= 3000 && salary < 10000 ? console.log("O colaborador é Senior.") : console.log("Ele é diretor.")







