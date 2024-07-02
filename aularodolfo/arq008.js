/* 11.0 Estrutura de Repetição - LOOP

11.1 For: Tem tres parametros internos necessários para que funcione.

1 INICIALIZAÇÃO: Cria uma variavel e colocar um valor inicial pra ela.
2 CONDIÇÃO: Enquanto for "true" (verdadeiro), o laço continuará iterando (rodando).
Ele irá verificar antes de cada iteração.
3 EXPRESSÃO FINAL: O que irá ocorrer a cada vez que o nosso laço


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