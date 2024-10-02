let meuNome = "Marcus"
let frase = `Olá, meu nome é ${meuNome}`

console.log(frase)

//OBJETO:
const marcus = {
    name: "Marcus",
    age: "35 anos",
    address: {
        street: "Travessa São Sebastião.",
        number: 339,
        city: "Vigia de Nazaré.",
    }
};

console.log(marcus)
console.log(marcus.address.city)

marcus.address.number = 360
console.log(marcus)

//ARRAY:
const myArray = [
    23, 
    {
    name: "Marcus",
    age: "35 anos",
    address: {
        street: "Travessa São Sebastião.",
        number: 339,
        city: "Vigia de Nazaré.",
    }
}, 
    "Bom dia.",
     450]

myArray[2] = "Boa Noite!"
console.log(myArray)

console.log(myArray[1].address.street)

myArray[1].address.number = 360
console.log(myArray)

//IF e ELSE:
let notaDoAluno = 4
let notaDeCorte = 5

if (notaDoAluno > notaDeCorte) {
    console.log("Parabéns, vc foi aprovado!")
} else {
    console.log("Infelizmente vc foi reprovado, estude mais!")
}

//FUNÇÕES:

function nomeNaTela(){
    console.log("Marcus")
}
nomeNaTela()






