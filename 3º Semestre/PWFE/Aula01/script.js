function bonus(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(salario > 2500){
        desconto = salario * (15 / 100);
    }
    else if(salario > 2000){
        desconto = salario * (10 / 100);
    }
    else if(salario > 1000){
        desconto = salario * (8 / 100);
    }

    let salarioFinal = salario - desconto;
    
    resultado.innerHTML =
      `Desconto de R$ ${desconto.toFixed(2)} <br>Seu salario final é R$ ${salarioFinal.toFixed(2)}`; 
}
document.getElementById('salario').addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        bonus();
    }
});

function frete(){
    let compra = Number(document.getElementById('compra').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if(compra >= 150){
        frete = 0;
    }
    else if(compra < 150){
        frete = 20;
    }

    let valorFinal = compra + frete;

    resultado.innerHTML = 
    `Frete R$ ${frete.toFixed(2)} <br>O valor final da compra é R$ ${valorFinal.toFixed(2)}`;
}

function desconto(){
    let abastecido = Number(document.getElementById('abastecido').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(abastecido > 200){
        desconto = abastecido * (5 / 100);
    }

    let valorFinal = abastecido - desconto;

    resultado.innerHTML = 
    `O desconto foi de R$ ${desconto.toFixed(2)} <br>O valor da compra ficou R$ ${valorFinal.toFixed(2)}`;
}

function taxa(){
    let conta = Number(document.getElementById('conta').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;

    if(conta > 100){
        taxa = conta * (10 / 100);
    }
    else if(conta < 100){
        taxa = 0;
    }

    let valorFinal = taxa + conta;

    resultado.innerHTML =
    `Valor da taxa R$ ${taxa.toFixed(2)} <br>O valor final da conta é R$ ${valorFinal.toFixed(2)}`;
}

function multa(){
    let mensalidade = Number(document.getElementById('mensalidade').value);
    let dias = Number(document.getElementById('dias').value);
    let resultado = document.getElementById('resultado');
    let multa = 0;

    if(dias > 0){
        multa = mensalidade * (2 / 100);
    }

    let valorTotal = mensalidade + multa;

    resultado.innerHTML = 
    `Valor da multa R$ ${multa.toFixed(2)} <br> O valor total é de R$ ${valorTotal.toFixed(2)}`;
}

function cash(){
    let valor = Number(document.getElementById('valor').value);
    let calcule = 0;
    let cashback = 0;

    if(valor > 300){
        calcule = valor * (5 / 100);
    }

    cashback = valor - calcule;

    resultado.innerHTML = 
    `O valor do cashback é de R$ ${calcule.toFixed(2)} <br> O valor liquido da compra é R$ ${cashback.toFixed(2)}`;
}