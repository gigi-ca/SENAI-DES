//  var - escopo global
// let - escopo local
// const - escopo global e o valor não se altera

var nome = "Julia"; //string
var idade = 50.5;
var habilitado = true;
const nascimento = 1875;

console.log(habilitado);// imprime no terminal

console.log(typeof(habilitado));

/*
 soma +
 subtração - 
 divisão / 
 multiplicacao *
 modulo %
 */

 var a = "10";
 var b = 10;

 console.log(a+b);

 /*
  igualdade ==
  diferente !=
  estritamente igual ===
  estritamente diferente !==
  maior >
  maior igual >=
  menor < 
  menor igual <=
 */

 if(a === b){
    console.log("São iguais");
 }
 else{
    console.log("São diferentes");
 }

 switch(b){
    case 1:
        break;
    case 2:
        break;
    default:
        break;
 }

 for(let i = 0; i < 10; i++){
    console.log(i);
 }


a = 11;

 while(a < 10){
    if(a == 5){
        break;
    }
 }

 do{

 }while(a < 10);