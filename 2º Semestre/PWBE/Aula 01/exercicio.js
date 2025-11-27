// exercicio 1
var nome = "Giovana";
console.log("Olá, "+ nome);

console.log("------------");
//exercicio 2
var a = 20;
var b = 10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log("------------");
//exercicio 3
var altura = 3;
var largura = 7;
area = (altura * largura);

console.log("A área do retângulo é: "+ area);

console.log("------------");
//exercicio 4
var nascimento = 2009;
var idade = (2025 - nascimento);

if(idade >= 18){
  console.log("Você é maior de idade");
}
else{
    console.log("Você é menor de idade");
}

console.log("------------");
//exercicio 5
var numero = 55;

if(numero % 2 == 0){
    console.log("O numero é par");
}
else{
    console.log("O numero é impar");
}
console.log("------------");

//exercicio 6
var n1 = 8;
var n2 = 8;
var n3 = 7;
media = (n1 + n2 + n3)/ 3;

if(media >= 9){
    console.log("A");
}
else if(media >= 7){
    console.log("B");
}
else if(media >= 5){
    console.log("C");
}
else{
    console.log("Reprovado");
}
console.log("------------");

//exercicio 7
for(let i = 1; i <= 200; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("------------");

//exercicio 8
var i = 0;
var f = 1;

for(i = 6 ; i > 0; i--){
    f = f * i;
   
}
console.log(f);
console.log("------------");

//exercicio 9
for(let i = 0; i <= 1000; i += 3) {
    console.log(i)
}
console.log("------------");