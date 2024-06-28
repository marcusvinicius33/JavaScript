
/*10.0 SetTimeout & setInterval.

10.1 SetTimeout: Executa somente uma vez.
10.2 SetInterval: Executa infinitas vezes.

10.1. SetTimeout: Ele executa a partir do tempo "timeout" que eu delimitar. 
Obs: timeout: o tempo é dado em milisegundo, assim 1000 milisegundos é igual a 1 segundo.

Obs: Tanto o "SetTimeout" como o "SetInterval" podem ser executados em tres formas. 

Primeira forma: utilizando esse atalho para escrever uma "function":

setTimeout(() => {
    
}, timeout);

Segunda forma: Forma mais antiga de escrever a "function":

setTimeout(function(){
    
}, timeout);

Terceira forma: É possível escrever uma "function" separada e quando der o tempo, eu chamar a "function":

function myFuncion(){

} 
setTimeout(myFuncion, timeout);

Exemplo de SetTimeout: 

setTimeout(function()  {
    alert ("Executei")
}, 3000); 

10.2 SetInterval: Executa a "function" da mesma forma que o "setTimeout", porém ele executa infinitas vezes.
Obs. O "interval" é o intervalo de tempo, que também é dado em milesimo de segundos.

Ex:
setInterval(() => {
    
}, interval);

Exemplo:

let number = 0
setInterval(() => {
    console.log (number++)
}, 1000);

Obs. Com o "clerInterval" é possível pausar o "setInterval". Para isso é preciso criar uma "setInterval" e colocar dentro de uma variavel.
*/

