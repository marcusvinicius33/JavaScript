/* 11.0 Estrutura de Repetição - LOOP

11.1 FOR: Tem tres parametros internos necessários para que funcione.

1 INICIALIZAÇÃO: Cria uma variavel e colocar um valor inicial pra ela.
2 CONDIÇÃO: Enquanto for "true" (verdadeiro), o laço continuará iterando (rodando).
Ele irá verificar antes de cada iteração.
3 EXPRESSÃO FINAL: O que irá ocorrer a cada vez que o nosso laço

Extrutura de um For:
for ([inicialização];[condição];[expressão final]) {
      
}
Exemplo:
for (let i = 0 ; i < 15; 1++) {
    console.log(i)

}
*/
const users = ["Maria", "Aline","João","Carolina", "Maria", "Aline","João","Carolina"]
/*
console.log(user[0])
console.log(user[1])
console.log(user[2])
console.log(user[3])*/

/*users.length => Tamanho do meu Array*/
for (let i  = 0; i < users.length; i++) {
    console.log(users[i])
}

/*
11.2 FOR OF: Mais uma extrutura de repetição, ele itera(analisa cada item, seja letra, seja palavra...) item por item de um arrey, parando de iterar sozinho após analisar todos os itens, não necessitando uma condição.

Extrutura de um For of:
for (const iterator of object) {
    
}
*/
const myName = "Rodolfo"
const usuario = ["João", "Maria", "Letícia"]

for (const letter of myName) {
    console.log(letter)
}
for (const name of usuario) {
    console.log(name)
}

/* 11.3 FOR IN: Serve pra iterar objetos.
*/
const users2 = {
    name: 'Marcus', age: 33, street:'Rua dos bobos'
}
for (const key in users2) {
    console.log(key)
}
/*Pra acessar um objeto dentro da chave pode usar essas duas formas:
console.log(users2.name)
console.log(users2['name'])

Assim, usando o for in, fica desse jeito:
*/
for ( const key in users2){
    console.log(key + users2[key])
}

for ( const key in users2){
    console.log(key + " : " + users2[key])
}

for ( const key in users2){
    console.log(`${key} : ${users2[key]}`)
}

/* 11.4 WHILE: Executa enquanto a "condicion" condição for "true" verdadeira. Primeiro ele verifica se a condição é verdadeira para depois executar.
Extrutura de um while:

while (condition) {
    
}
*/
let i = 0

while (i < 30) {
    i++;
    console.log(i)
}

/*11.5. DO WHILE:Ele executa primeiro, e depois verifica se a condição é verdadeira.
Extrutura de um do while:

do {
    
} while (condition);
*/

do {
    i++;
    console.log(i)
} while (i < 10);

/*11.6 ForEach */
