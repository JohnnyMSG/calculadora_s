var teclado = document.querySelector(".teclado");
var teclas = document.querySelectorAll(".tecla");
var campo = document.querySelector(".campo")

var numeros = [];
var operadores = [];
var resultado = 0;
var ultimoTexto = "";


teclas.forEach(function (tecla) {
    tecla.addEventListener("click", function () {
        var textoTecla = tecla.textContent;

        if (textoTecla == "C") {
            campo.value = "0";
            numeros = [];
            operadores = [];
            resultado = 0;
            ultimoTexto = "";
            console.clear();
        } else if (textoTecla == "+" || textoTecla == "-" || textoTecla == "X" || textoTecla == "/") {
            if (ultimoTexto !== "+" && ultimoTexto !== "-" && ultimoTexto !== "X" && ultimoTexto !== "/") {
                operadores.push(textoTecla);
                campo.value = campo.value + " " + textoTecla + " ";
                ultimoTexto = textoTecla;
            }

        } else if (textoTecla == "=") {
            calcularResultado();
            ultimoTexto = textoTecla;
        } else {
            if (campo.value == "0") {
                campo.value = "";
            }
            numeros.push(textoTecla);
            campo.value = campo.value + textoTecla;
            ultimoTexto = textoTecla;
        }
    });
});

function calcularResultado() {
    var separador = campo.value.split(' ');
    var tempNumero = "";
    var numerosOperacao = [];
    var operadoresOperacao = [];

    separador.forEach(function (texto) {
        if (texto !== "+" && texto !== "-" && texto !== "X" && texto !== "/") {
            texto == "" ? texto = 0 : null;
            tempNumero += texto;
            numerosOperacao.push(parseFloat(tempNumero));
            tempNumero = '';
        } else {
            operadoresOperacao.push(texto);
        }
    });

    console.log("=================");
    console.log(numerosOperacao);
    console.log(operadoresOperacao);

    for (var i = 0; i < numerosOperacao.length; i++) {
        if (operadoresOperacao[i] == "X" || operadoresOperacao[i] == "/") {
            if (operadoresOperacao[i] == "X") {
                numerosOperacao[i + 1] = numerosOperacao[i] * numerosOperacao[i + 1];
            } else {
                numerosOperacao[i + 1] = numerosOperacao[i] / numerosOperacao[i + 1];
            }
            numerosOperacao[i] = null;
            operadoresOperacao[i] = null;
        }
    }
    
    numerosOperacao = numerosOperacao.filter(num => num !== null);
    operadoresOperacao = operadoresOperacao.filter(op => op !== null);

    console.log("=================");
    console.log(numerosOperacao);
    console.log(operadoresOperacao);
    console.log("=================");

    for (var i = 0; i < numerosOperacao.length; i++) {
        if (operadoresOperacao[i] == "+" || operadoresOperacao[i] == "-") {
            if (operadoresOperacao[i] == "+") {
                numerosOperacao[i + 1] = numerosOperacao[i] + numerosOperacao[i + 1];
            } else {
                numerosOperacao[i + 1] = numerosOperacao[i] - numerosOperacao[i + 1];
            }
        }
    }

    resultado = numerosOperacao[numerosOperacao.length - 1];
    console.log("Resultado: " + resultado);

    campo.value = resultado;

}