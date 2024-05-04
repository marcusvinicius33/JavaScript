const convertButton = document.querySelector(".convert-button") /* 1. Liguei o botão da "html" criando essa "const" */

function convertValues(){
    const inputValue = document.querySelector("#ivalor").value /* 3. criei essa const dentro da função pra ele mostrar o "value" valor exato que estiver no "input". */
    const valueConvertReal = document.querySelector(".pvalor-br")
    const valueConvertedUsa = document.querySelector(".pvalor-usa")

    const dolarToday = 5.2 /* 4. "const" que define o valor do dolar a ser calculado.*/ 
    const valorConvertido = inputValue / dolarToday /* 5. Nessa "const" o valor do input é dividido pelo valor do dolar. Para que apareça no "console" é preciso colocar o nome dessa "const" no "console.log" */

    valueConvertReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    valueConvertedUsa.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorConvertido)
    

    console.log(valorConvertido)
}

convertButton.addEventListener("click", convertValues) /* 2. Instalei um ouvinte de eventos no butão para avisar sempre que ele for clicado "click", e também chamar a função "convertValues"*/
