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
