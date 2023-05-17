const linha01 = document.querySelector("#linha01")
const linha02 = document.querySelector("#linha02")
const linha03 = document.querySelector("#linha03")
const linha04 = document.querySelector("#linha04")
const linha05 = document.querySelector("#linha05")
const botao = document.querySelector("#botao")
var resultado = document.querySelector("#resultado")
let imc = 0; 

function calculoImc(peso, altura) {
    return imc = peso / (altura*altura);
}

function marcaIMC (imc) {
    if (imc<18.5) {
        linha01.style.backgroundColor = "#97B98D";
    } else if (imc>=18.5 && imc<=24.9) {
        linha02.style.backgroundColor = "#97B98D";
    } else if (imc>=25 && imc<=29.9) {
        linha03.style.backgroundColor = "#97B98D";
    } else if (imc>=30 && imc<=39.9) {
        linha04.style.backgroundColor = "#97B98D";
    } else if (imc>40) {
        linha05.style.backgroundColor = "#97B98D";
    }
}


botao.addEventListener("click", () => {
    var peso = document.querySelector("#input__peso").value
    var altura = document.querySelector("#input__altura").value
    var resultadoImc = calculoImc(peso, altura);
    var espaco = "&nbsp;"

    marcaIMC(resultadoImc)

    if (isNaN(resultadoImc)) {
        alert("Valor inválido. Por favor, verifique se não houve algum erro.")
    } else {
    resultado.innerHTML = espaco + resultadoImc.toFixed(1);
    }  
})


