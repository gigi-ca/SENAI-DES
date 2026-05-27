var regras = document.getElementsByClassName("regras")[0];

function mostraregras(){
    regras.style.display = "flex";
}

function fecharegras(){
    regras.style.display = "none";
}

var jogo = document.getElementsByClassName("jogo")[0];
var selecao =  document.getElementsByClassName("gameplay")[0];
var teste = document.getElementsByClassName("teste")[0];
var opcao = document.getElementsByClassName("opcao")[0];

var terra = document.getElementsByClassName("terra")[0];
var agua = document.getElementsByClassName("agua")[0];
var fogo = document.getElementsByClassName("fogo")[0];
var ar = document.getElementsByClassName("ar")[0];
var raio = document.getElementsByClassName("raio")[0];

var teste1 = document.getElementsByClassName("teste1")[0];
var resultado = document.getElementsByClassName("result")[0];

var refs = [terra, agua, fogo, ar, raio];

var pontuacao = document.getElementsByClassName("pontuacao")[0];
var playAgain = document.getElementsByClassName("fim")[0];

var score = 0;

var buttonRegras = document.getElementsByClassName("regras-button")[0];

function jogar(num){

    jogo.style.cssText = "animation: opacidade 0.5s linear; animation-direction:reverse;"

    setTimeout(()=>{
        jogo.style.display = "none";
    }, 500);

    setTimeout(()=>{
        selecao.style.display = "flex";
    }, 500);

    selecao.style.cssText = "animation: opacidade 1.5s linear;"

    buttonRegras.style.display = "none";

    switch(num){

        case terra:
            teste.innerHTML = terra.outerHTML
            teste.value = terra.value
            break;

        case agua:
            teste.innerHTML = agua.outerHTML
            teste.value = agua.value
            break;

        case fogo:
            teste.innerHTML = fogo.outerHTML
            teste.value = fogo.value
            break;

        case ar:
            teste.innerHTML = ar.outerHTML
            teste.value = ar.value
            break;

        case raio:
            teste.innerHTML = raio.outerHTML
            teste.value = raio.value
            break;

        default:
            break;

    }

    var random = Math.floor(Math.random() * 5);

    var house = refs[random];

    teste1.innerHTML = house.outerHTML

    teste1.value = house.value

    setTimeout(()=>{
        Resolucao()
    }, 500);
}

function Resolucao(){

    if(

        teste.value == "terra" && teste1.value == "raio" ||
        teste.value == "terra" && teste1.value == "ar" ||

        teste.value == "agua" && teste1.value == "terra" ||
        teste.value == "agua" && teste1.value == "fogo" ||

        teste.value == "fogo" && teste1.value == "ar" ||
        teste.value == "fogo" && teste1.value == "terra" ||

        teste.value == "ar" && teste1.value == "agua" ||
        teste.value == "ar" && teste1.value == "raio" ||

        teste.value == "raio" && teste1.value == "agua" ||
        teste.value == "raio" && teste1.value == "fogo"

    ){

        resultado.innerHTML = "Você ganhou!!";

        score +=1;

        pontuacao.innerHTML = score;

        teste.style.cssText = "animation: luzdeFundo 1.5s ease infinite;";

    }

    else if(

        teste.value == "raio" && teste1.value == "terra" ||
        teste.value == "ar" && teste1.value == "terra" ||

        teste.value == "terra" && teste1.value == "agua" ||
        teste.value == "fogo" && teste1.value == "agua" ||

        teste.value == "ar" && teste1.value == "fogo" ||
        teste.value == "terra" && teste1.value == "fogo" ||

        teste.value == "agua" && teste1.value == "ar" ||
        teste.value == "raio" && teste1.value == "ar" ||

        teste.value == "agua" && teste1.value == "raio" ||
        teste.value == "fogo" && teste1.value == "raio"

    ){

        resultado.innerHTML = "Você perdeu!!";

        teste1.style.cssText = "animation: luzdeFundo 1.5s ease infinite;";

    }

    else{

        resultado.innerHTML = "Empate";

        teste.style.cssText = "animation: luzdeFundo 1.5s ease infinite;";

        teste1.style.cssText = "animation: luzdeFundo 1.5s ease infinite;";

    }

    playAgain.style.display = "flex";
}

function reset(){

    jogo.style.display = "flex";
    selecao.style.display = "none";
    resultado.innerHTML="";
    playAgain.style.display = "none";
    teste.style.csstext = "animation: '' ";
    teste1.style.cssText = "animation: '' ";
    jogo.style.cssText= "''";
    buttonRegras.style.display = "block";
}

