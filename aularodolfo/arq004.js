const convertButton = document.querySelector(".convert-button") /* 1. Liguei o botão da "html" criando essa "const" */
const selectConverter = document.querySelector(".select-converter")

function convertValues(){
    const inputValue = document.querySelector("#ivalor").value /* 3. criei essa const dentro da função pra ele mostrar o "value" valor exato que estiver no "input". */
    const valueConvertReal = document.querySelector(".pvalor-br")
    const valueConvertedUsa = document.querySelector(".pvalor-usa")

    console.log(selectConverter.value)

    const dolarToday = 5.2 /* 4. "const" que define o valor do dolar a ser calculado.*/ 
    const euroToday = 5.46
    const libraToday = 6.36
    const bitcoinToday = 324.129

    const valorConvertido = inputValue / dolarToday /* 5. Nessa "const" o valor do input é dividido pelo valor do dolar. Para que apareça no "console" é preciso colocar o nome dessa "const" no "console.log" */

    if(selectConverter.value == "dolar"){
        valueConvertedUsa.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorConvertido/dolarToday)
    }
    if(selectConverter.value == "euro"){
        valueConvertedUsa.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido/euroToday)
    }
    if(selectConverter.value == "libra"){
        valueConvertedUsa.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(valorConvertido/libraToday)
    }
    if(selectConverter.value == "bitcoin"){
        valueConvertedUsa.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BTC"
        }).format(valorConvertido/bitcoinToday)
    }

    valueConvertReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    console.log(valorConvertido)
}


function changeCurrency() {
    const changeName = document.querySelector("#imoeda-dolar")
    const changeImage = document.querySelector(".moeda-imagem")

    if (selectConverter.value == "dolar"){
        changeName.innerHTML = "Dólar"
        changeImage.src = "./assets/dolar.png"
    }
    if (selectConverter.value == "euro"){
        changeName.innerHTML = "Euro"
        changeImage.src = "./assets/euro.png"
    }
    if (selectConverter.value == "libra"){
        changeName.innerHTML = "Libra"
        changeImage.src = "./assets/libra.png"
    }
    if (selectConverter.value == "bitcoin"){
        changeName.innerHTML = "Bitcoin"
        changeImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}


selectConverter.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) /* 2. Instalei um ouvinte de eventos no butão para avisar sempre que ele for clicado "click", e também chamar a função "convertValues"*/
