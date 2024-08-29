/* 11.0 OPERADORES LOGICOS E CONDICIONAIS= As Condicionais estão diretamente ligadas a tomada de decisão dos algoritmos, e os Operadores Lógicos vão ajudar na hora de escrever a extrutura de condicionais. 
Exemplo de Operdadores Lógicos: 

1. && : AND, que significa "i".
  O operador AND lógico condicional &&, também conhecido como operador AND lógico de "curto-circuito", computa o AND lógico de seus operandos. O resultado de x && y será true se ambos x e y forem avaliados como true. Caso contrário, o resultado será false. Se x for avaliado como false, y não será avaliado. Ou seja, no caso do AND todos os operadores devem ser avaliados como TRUE, caso contrário ele será considerado FALSE.

2. || : OR,que significa "ou".
  O operador OR lógico condicional ||, também conhecido como operador OR lógico de "curto-circuito", computa o OR lógico de seus operandos. O resultado de x || y será true se x ou y for avaliado como true. Caso contrário, o resultado será false. Se x for avaliado como true, y não será avaliado. Ou seja, no caso do OR, basta um operador ser considerado TRUE, para ser considerado TRUE.

3. ! : NOT, que é um operedor de negação.
  O prefixo unário ! calcula a negação lógica de seu operando. Ou seja, ele produz true, se o operando for avaliado como false, e false, se o operando for avaliado como true

11.1. A declaração if: É uma extrutura de condicional; que significa SE. Assim, no caso do if SE um determinado valor for true ele executa um bloco de código contido dentro dele, SE for false ele ignora. Ou seja, use a if instrução para especificar um bloco de código JavaScript a ser executado se uma condição for verdadeira.
Note que if está em letras minúsculas. Letras maiúsculas (If ou IF) gerarão um erro de JavaScript.
*/
const idade = 30;
const tipo = 'admin';

if ( idade > 29 && tipo == 'admin' ) {
    console.log("Ele tem mais de 29 anos e é do tipo administrador.")
} // no caso do AND "&&" todos os operadores devem ser avaliados como TRUE, caso contrário ele será considerado FALSE.

const idade2 = 28;
const tipo2 = "programador";

if (idade2 > 29 || tipo2 == "programador") {
    console.log("Ele tem mais de 29 anos e é do tipo programador.")
} //No caso do OR "||", basta um operador ser considerado TRUE, para a operação ser considerado TRUE.

/* 11.2. A declaração else: Use a else instrução para especificar um bloco de código a ser executado se a condição for falsa.

Exemplo
Se a hora for menor que 18, crie uma saudação de "Bom dia", caso contrário, "Boa noite":
*/

const hora = 19;
if (hora < 18) {
  console.log("Bom dia!")
} else {
  console.log("Boa Noite!")
}

/*11.3. A declaração else if: Use a else if instrução para especificar uma nova condição se a primeira condição for falsa.
 */
const idade3 = 23;

if (idade3 > 29) {
    console.log("Ele tem mais de 29 anos.")
} else if (idade3 > 23) {
    console.log("Ele tem mais de 25 anos.")
} else if (idade3 == 23) {
    console.log("Ele tem 23 anos.")
} else {
    console.log("Ele não tem idade mínima.")
}

/*11.4. O SWITCH CASE em JavaScript é uma estrutura de controle muito útil quando estamos trabalhando com uma variável que pode assumir diferentes valores possíveis e, a partir desses valores, executar diferentes blocos de código correspondentes.

Como no nosso exemplo abaixo, a partir do valor da variável idade4, diferentes blocos de códigos são executados, retornando respostas diferentes sobre a idade da pessoa.

Para obtermos um resultado, começaremos com a palavra chave switch(), onde, dentro dos parênteses, passaremos a variável que queremos manipular, que no nosso caso é a variável idade4.

Em seguida, atribuiremos os casos (case) e as respostas, ou seja, os blocos de código que devem ser executados para cada variável.

Nosso código ficará assim:
*/
const idade4 = 19;

switch (idade4) {
    case 20:
        console.log("Ele tem 20 anos.");
        break;
    case 21:
        console.log("Ele tem 21 anos.");
        break;

    default:
        console.log("Ele não tem nenhuma das idade anteriores.");
}
/* IMPORTANTE: o switch case em JavaScript não termina automaticamente após encontrar uma correspondência, a menos que você inclua uma instrução break para cada caso. Sem essa instrução, ele continuará executando todos os outros blocos de código abaixo da correspondência encontrada.

Além disso, no nosso código, não temos uma resposta padrão para quando a idade4 inserida não corresponder a nenhum dos casos. Se você voltar a analisar o código que tínhamos com if-else, verá que temos a resposta: "Ele não tem idade mínima.".

Para incluirmos isso dentro da estrutura do switch case, precisamos adicionar a instrução default, que é uma condição padrão, um bloco de código que será executado caso nenhuma das outras opções seja correspondida. No caso do default, não precisamos da instrução break, pois não há mais blocos de código dentro do nosso switch.
*/

/* 12.0. ESTRUTURA DE REPETIÇÕES OU LOOPS: Os loops podem executar um bloco de código diversas vezes. Os loops são úteis se você quiser executar o mesmo código repetidamente, cada vez com um valor diferente.

JavaScript suporta diferentes tipos de loops:

  1. for- percorre um bloco de código várias vezes
  2. for/in- percorre as propriedades de um objeto
  3. for/of- percorre os valores de um objeto iterável
  4. while- percorre um bloco de código enquanto uma condição especificada é verdadeira
  5. do/while- também percorre um bloco de código enquanto uma condição especificada é verdadeira.

12.1. O loop For: A for declaração cria um loop com 3 expressões opcionais:

for (expression 1; expression 2; expression 3) {
  // bloco de código a ser executado
}
A expressão 1 é executada (uma vez) antes da execução do bloco de código.
A expressão 2 define a condição para execução do bloco de código.
A expressão 3 é executada (toda vez) após o bloco de código ter sido executado.
*/
for (let numero = 0; numero < 5; numero++) {
    console.log(`Repetição de número ${numero}.`) 
}
/*No exemplo acima, você pode ler:

A expressão 1 define uma variável antes do início do loop (seja numero = 0).
A expressão 2 define a condição para que o loop seja executado (numero deve ser menor que 5).
A expressão 3 aumenta um valor (numero++) cada vez que o bloco de código no loop é executado.

Expressão 1: Normalmente você usará a expressão 1 para inicializar a variável usada no loop (seja i = 0).
Obs. Nem sempre é esse o caso. O JavaScript não se importa. A expressão 1 é opcional.
obs2. Você pode iniciar muitos valores na expressão 1 (separados por vírgula), exemplo:

for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

E você pode omitir a expressão 1 (como quando seus valores são definidos antes do loop começar), exemplo:

let i = 2;
let len = cars.length;
let text = "";

for (; i < len; i++) {
  text += cars[i] + "<br>";
}
*/

