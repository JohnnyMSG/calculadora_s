var teclado = document.querySelector(".teclado");
var teclas = document.querySelectorAll(".tecla");
var campo = document.querySelector(".campo")

var numero1 = "";
var numero2 = "";
var numero3 = "";
var operador1 = "";
var operador2 = "";
var resultado = 0;

teclas.forEach(function (tecla) {
    tecla.addEventListener("click", function () {
        var textoTecla = tecla.textContent;

        if (tecla.textContent == "C") {
            campo.value = "0";
            numero1 = "";
            numero2 = "";
            numero3 = "";
            operador1 = "";
            operador2 = "";
            resultado = 0;
            console.clear();
        } else if (textoTecla == "+" || textoTecla == "-" || textoTecla == "X" || textoTecla == "/") {
            if (numero2 !== "") {
                operador2 = textoTecla;
                campo.value = campo.value + " " + operador2 + " ";
            } else if (numero1 !== "") {
                operador1 = textoTecla;
                campo.value = campo.value + " " + operador1 + " ";
            } 
        } else if (textoTecla == "=") {
            if (numero3 !== "" && operador2 !== "") {
                var floatNumero1 = parseFloat(numero1);
                var floatNumero2 = parseFloat(numero2);
                var floatNumero3 = parseFloat(numero3);

                if (operador2 == "X" || operador2 == "/") {
                    
                    resultado = operador2 == "X" 
                        ? floatNumero2 * floatNumero3 
                        : floatNumero2 / floatNumero3;

                    switch (operador1) {
                        case "+":
                            resultado += floatNumero1;
                            break;
                        case "-":
                            resultado -= floatNumero1;
                            break;
                        case "X":
                            resultado *= floatNumero1;
                            break;
                        case "/":
                            resultado /= floatNumero1;
                            break;
                    }
                } else if (operador1 == "X" || operador1 == "/") {

                    resultado = operador1 == "X" 
                        ? floatNumero1 * floatNumero2 
                        : floatNumero1 / floatNumero2;

                    switch (operador2) {
                        case "+":
                            resultado += floatNumero3;
                            break;
                        case "-":
                            resultado -= floatNumero3;
                            break;
                        case "X":
                            resultado *= floatNumero3;
                            break;
                        case "/":
                            resultado /= floatNumero3;
                            break;
                    }
                } else {
                    resultado = operador1 == "+" 
                        ? floatNumero1 + floatNumero2 
                        : floatNumero1 - floatNumero2;

                    switch (operador2) {
                        case "+":
                            resultado += floatNumero3;
                            break;
                        case "-":
                            resultado -= floatNumero3;
                            break;
                }
            }

                campo.value = resultado;
                console.log(resultado);
            } else if ((numero1 !== "" && numero2 !== "") && operador1 !== "") {
                var floatNumero1 = parseFloat(numero1);
                var floatNumero2 = parseFloat(numero2);
                switch (operador1) {
                    case "+":
                        resultado = floatNumero1 + floatNumero2;
                        break;
                    case "-":
                        resultado = floatNumero1 - floatNumero2;
                        break;
                    case "X":
                        resultado = floatNumero1 * floatNumero2;
                        break;
                    case "/":
                        resultado = floatNumero1 / floatNumero2;
                        break;
                }
                campo.value = resultado;
                console.log(resultado);
            }
        } else {
            if (campo.value == "0") {
                campo.value = "";
            }
            campo.value = campo.value + textoTecla;
            if (operador1 == "") {
                numero1 = numero1 + textoTecla;
                console.log("Esse é o número 1: " + numero1);
            } else if (operador1 !== "" && operador2 == "") {
                numero2 = numero2 + textoTecla;
                console.log("Esse é o número 2: " + numero2);
            } else if (operador2 !== "") {
                numero3 = numero3 + textoTecla;
                console.log("Esse é o número 3: " + numero3);
            } else {
                console.log("Não tratado!");
            }
        }
    });
});

