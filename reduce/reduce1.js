//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível.
//Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const preco = [14.00, 15.00, 35.00, 56.00];
var somatorio = 0;
var resto =0;
var negativo = 0;

function soma(array){
    return  array.reduce(function(prev, current){
          
         somatorio = prev + current;
         return somatorio
     })
 }

 function saldo(value, valor){
    console.log(value);
    console.log(valor);
    return resto = valor - value;
 }

 

 
 console.log(soma(preco));
 console.log(saldo(somatorio,200));
 
 
