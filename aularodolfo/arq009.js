/* 12.0 FUNÇÕES: (Function), é um trecho de código que é executado SOMENTE quando solicitado. Podendo ser utilizada varias vezes, sempre que for chamada.
No Exemplo abaixo a função só aparece quando ela é chamada "nomeNaTela()", se não for chamada, só aparecerá a fruta:
*/
const fruta = "Abacate"
console.log(fruta)

function nomeNaTela() {
    console.log("Marcus")
}
nomeNaTela()
/*A função tem o "poder" de receber informações(argumentos ou parametros) para serem usadas dentro dela. 
Extrutura da função:
    function name(params) {
        
    }
Exemplo:
*/
function qualMeuNome(name) {
    console.log(name)
}
qualMeuNome("Ciara")
//Nesse exemplo, foi dado à função um parametro "name". Assim, ao chamar a função "qualMeuNome()", foi acrescentado o nome "Ciara". Se nenhuma informação fosse acrescentada daria "undefined", ou seja, um valor indefinido, não existe. Logo, quando dado um parametro, é necessario acrescentar a informação correspondente.

//No entanto, é possível acrescentar um valor padrão para o caso de não ser informado nenhum valor ao parametro, mas a prioridade sempre será o valor enviado, ficando o valor padrão somente quando nada for informado. Como no exemplo abaixo:
function qualMeuNome3(name = "Brisa") {
    console.log(name)
}
qualMeuNome3()

//Obs. É possivel acrescentar a essa informação uma "tamplete string" dentro do console.log, ou mesmo repetir a função, mudando a informação, como no Exemplo abaixo:
function qualMeuNome2(name) {
    console.log(`O meu nome é ${name}`)
}
qualMeuNome2("Nathalie")
qualMeuNome2("Matheus")
qualMeuNome2("Maria")
qualMeuNome2("Nonato")

//Obs. Também é possível mandar mais de um parametro, sendo possivel também somar, ou subtriar, ou fazer outras operações aritmeticas com os valores, como no exemplo abaixo:
function soma(value, value2) {
    console.log(value + value2)
}
soma(20, 30)
soma(15, 45)

