/* 1.0 LÓGICA DE PROGRAMAÇÃO: É o conjunto de tecnicas e conhecimentos, utilizados para colocar instruções em uma sequencia lógica afim de chegar em um determinado resultado.

    1.1 ALGORITMO: É a sequencia lógica utilizada, escrito por meio de uma linguagem de programação.
    1.2 HARDWARE: É o componente físico de uma máquina, a memória, a placa mãe e etc..
    1.3 SOFTWARE: É o sistema que roda em cima do componente físico passando instruções por meio do algoritmos.

2.0 LINGUAGEM DE PROGRAMAÇÃO: Pode ser dividida em tres tipos de linguagem. 
    2.1. LINGUAGEM DE MAQUINA: Linguagem compreendida apenas pelos computadores, que é uma linguagem binária.
    2.2 LINGUAGEM DE BAIXO NÍVEL: Linguagem proximas a linguagem de máquinas, mas que consegue ser compreendida pelos seres humanos.
    2.3. LINGUAGEM DE ALTO NÍVEL: São as linguagem compreendidas pelas pessoas, podendo utilizar pra programar. Ex: JavaScript, php, python e etc...

        Obs. A máquina não entende a linguangem de alto nível, logo é preciso converter o código fonte (conjunto de pastas e arquivos que compõe o sistema) de uma forma que a máquina entenda. Utilizando duas formar principais para fazer isso. A compilação e a interpretação.
        Na COMPILAÇÃO o código fonte é são convertidos em um ou mais arquivos que são compreendidas pela máquina, esses arquivos salvos são executados pelo sistema.
        Na INTERPRETAÇÃO o código fonte passa a ser traduzido, e assim, executado pelo sistema. 
        O Java Script é uma linguagem interpretada.

3.0 VARIAVEIS no JavaScript: Servem para guardar dados na memória, existem três tipos:
var, let e const. O var e a let podem ser redeclaradas, e a const não pode mudar o seu valor, ou seja, ser redeclarada.
*/
let frase = "Essa é uma frase qualquer.";
frase = "Frase com novo valor."
console.log(frase)

const fraseNova = "Uma nova frase";
console.log(fraseNova)

/*4.0 TIPOS DE DADOS do Java Script.

4.1 STRING: Conjunto de caracteres, geralmente um texto entre aspas, seja simple ou duplo. Ou seja, "um texto ou palavras entre aspas" e 'uma string'.
Exemplo:
*/
let minhaString =  "Todo esse 'texto' entre aspas é uma string."
// É possível 'concatenar', ou seja, juntas, somar, duas string. Da seguinte forma. Ex:
const primeiraString = "O Marcus"
const segundaString = "é um programador."

console.log(primeiraString + " " + segundaString)
/*Obs. A aspas dupla no exemplo significa mais uma string, no caso, um espaçamento, que será vista no resultado do console.log.

Outra forma de concatenar é utilizando uma "template string" que é uma maneira mais otimizada de concatenar ou unir dados para formar uma expressão, com ele é possível misturar diferentes tipos (variáveis, textos, operadores etc) de forma mais eficiente e no final irá converter a expressão em uma string única.
A Extrutura de uma Template String é entre parentese, uma crase, mais cifrão e cochetes:
console.log(`texto ${}`)
Exemplo:
*/
console.log(`Você sabia que o Marcus ${segundaString}`)

/*4.2. NUMBER: O Número deve ser escrito sem aspas, se não ele será considerado uma string.
Obs. é possivel concatenar os números com operações de soma (+), subtração (-), multiplicação (*), divisão (/).
E com o "typeof" é possível saber qual é o tipo do dado, Exemplos abaixo:
*/
const meuNumero = 4
const outroNumero = 8

console.log(meuNumero * outroNumero)
console.log(typeof outroNumero)

/* 4.3. NULL: É um valor nulo.
   4.4. UNDEFINED: O undefined é um valor indefinido, ele não existe.
*/
let semValor; 
console.log(typeof semValor)

//5.0. FUNÇÕES (Function), é um trecho ou bloco de código que é executado SOMENTE quando solicitado.Exemplo:

function minhaFunction(mensagem, nome, number) {
    console.log(mensagem, nome, number);
}
minhaFunction("Primeira Mensagem", "Marcus", 35)
minhaFunction("Segunda Mensagem", "Ciara", 1)

//A Função também tem uma opção de retorno como no Exemplo abaixo:
function minhaFuncao2(meuNome) {
    return meuNome
}
console.log(minhaFuncao2("Barbosa"))
//ou
function minhaFuncao(myName) {
    return`${myName} é meu nome.`
}
console.log(minhaFuncao("Vinícius"));
//Outro Exemplo:
function feira(fruta, legume, valor) {
    console.log(fruta, legume, valor);
    
}
feira("Banana", "cebola", "45,00")

  


