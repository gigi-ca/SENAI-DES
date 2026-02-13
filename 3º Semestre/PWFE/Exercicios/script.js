function bonus(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;

    if(salario > 2000){
        bonus = salario * (10 / 100);
    }

    let valorFinal = salario + bonus;

    resultado.innerHTML = `Bonus de R$ ${bonus.toFixed(2)} <br>Salario final R$ ${valorFinal.toFixed(2)}`;
}