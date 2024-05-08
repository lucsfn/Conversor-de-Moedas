/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Array de cotações

// Valores atualizados em 03/05/2024 02:28

const moedas = [
    {
        nome: "Real Brasileiro",
        codigo: "BRL",
        cotacoes: {
            dolar: 0.20,
            yuan: 1.39,
            euro: 0.18,
            libra: 0.16,
            pesoArgentino: 171.81,
        },
    },
    {
        nome: "Dólar Americano",
        codigo: "USD",
        cotacoes: {
            real: 5.11,
            yuan: 7.24,
            euro: 0.93,
            libra: 0.8,
            pesoArgentino: 878.25,
        },
    },
    {
        nome: "Yuan Chinês",
        codigo: "CNY",
        cotacoes: {
            real: 0.73,
            dolar: 0.14,
            euro: 0.13,
            libra: 0.11,
            pesoArgentino: 121.33,
        },
    },
    {
        nome: "Euro",
        codigo: "EUR",
        cotacoes: {
            real: 5.49,
            dolar: 1.07,
            yuan: 7.77,
            libra: 0.86,
            pesoArgentino: 942.78,
        },
    },
    {
        nome: "Libra Esterlina",
        codigo: "GBP",
        cotacoes: {
            real: 6.42,
            dolar: 1.25,
            yuan: 9.08,
            euro: 1.17,
            pesoArgentino: 1102.10,
        },
    },
    {
        nome: "Peso Argentino",
        codigo: "ARS",
        cotacoes: {
            real: 0.0058,
            dolar: 0.0011,
            yuan: 0.0082,
            euro: 0.0011,
            libra: 0.00091,
        },
    },
];

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Extrair o valor digitado pelo usuário no input

// Seleciona o input do tipo number com
let valorDeEntrada = document.querySelector("#valor");

// Variável que armazenará o valor digitado pelo usuário
let valorDigitado = 0;

// Adiciona um de evento para detectar quando o valor do input é modificado pelo usuário
valorDeEntrada.addEventListener("input", function () {
    // Atualiza a variável com o valor digitado pelo usuário no input
    valorDigitado = parseFloat(valorDeEntrada.value); // Converter o valor para float dentro deste evento
    // Imprime no console o valor digitado pelo usuário (teste do código)
    console.log(valorDigitado);
});

// Converter a variável para float
parseFloat(valorDigitado);

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Obter a primeira moeda selecionada pelo usuário

// Seleciona o elemento select
const moedaDeOrigem = document.querySelector("#moeda-origem");

// Variável que armazenará a opção selecionada pelo usuário
let valorMoedaSelecionada = "";

// Adiciona um ouvinte de evento para detectar quando a opção selecionada é alterada
moedaDeOrigem.addEventListener("change", function () {
    // Atualiza a variável com o valor selecionado pelo usuário no select
    valorMoedaSelecionada = moedaDeOrigem.value;

    // Exibe a opção selecionada pelo usuário no console
    console.log(valorMoedaSelecionada);
});

// Obter a segunda moeda selecionada pelo usuário

// Seleciona o elemento select com o
const moedaDeDestino = document.querySelector("#moeda-destino");

// Variável que armazenará a opção selecionada pelo usuário como moeda de destino
let valorMoedaDestinoSelecionada = "";

// Adiciona um ouvinte de evento para detectar quando a opção selecionada como moeda de destino é alterada
moedaDeDestino.addEventListener("change", function () {
    // Atualiza a variável com o valor selecionado pelo usuário no select
    valorMoedaDestinoSelecionada = moedaDeDestino.value;

    // Exibe a opção selecionada pelo usuário como moeda de destino no console
    console.log(valorMoedaDestinoSelecionada);
});

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Variável de resposta
let valorConvertido = 0;



// Obtém o elemento <p> onde o resultado será exibido
const resultadoParagrafo = document.getElementById("resultado");

// Função para executar a lógica de conversão de moeda
function converterMoeda() {
    // Limpar o resultado anterior
    resultadoParagrafo.textContent = "";

    // Tratativa de erro (se o usuário digitar 0)
    if (valorDigitado === 0) {
        alert("Digite um valor diferente de 0");
    }

    // Conversão

    // BRL
    if (valorMoedaSelecionada === "BRL") {
        switch (valorMoedaDestinoSelecionada) {
            case "BRL":
                valorConvertido = valorDigitado;
                break;
            case "USD":
                valorConvertido = valorDigitado * moedas[0].cotacoes.dolar;
                break;
            case "CNY":
                valorConvertido = valorDigitado * moedas[0].cotacoes.yuan;
                break;
            case "EUR":
                valorConvertido = valorDigitado * moedas[0].cotacoes.euro;
                break;
            case "GBP":
                valorConvertido = valorDigitado * moedas[0].cotacoes.libra;
                break;
            case "ARS":
                valorConvertido = valorDigitado * moedas[0].cotacoes.pesoArgentino;
        }
    }

    // USD
    if (valorMoedaSelecionada === "USD") {
        switch (valorMoedaDestinoSelecionada) {
            case "BRL":
                valorConvertido = valorDigitado * moedas[1].cotacoes.real;
                break;
            case "USD":
                valorConvertido = valorDigitado;
                break;
            case "CNY":
                valorConvertido = valorDigitado * moedas[1].cotacoes.yuan;
                break;
            case "EUR":
                valorConvertido = valorDigitado * moedas[1].cotacoes.euro;
                break;
            case "GBP":
                valorConvertido = valorDigitado * moedas[1].cotacoes.libra;
                break;
            case "ARS":
                valorConvertido = valorDigitado * moedas[1].cotacoes.pesoArgentino;
                break;
        }
    }

    // CNY
    if (valorMoedaSelecionada === "CNY") {
        switch (valorMoedaDestinoSelecionada) {
            case "BRL":
                valorConvertido = valorDigitado * moedas[2].cotacoes.real;
                break;
            case "USD":
                valorConvertido = valorDigitado * moedas[2].cotacoes.dolar;
                break;
            case "CNY":
                valorConvertido = valorDigitado;
                break;
            case "EUR":
                valorConvertido = valorDigitado * moedas[2].cotacoes.euro;
                break;
            case "GBP":
                valorConvertido = valorDigitado * moedas[2].cotacoes.libra;
                break;
            case "ARS":
                valorConvertido = valorDigitado * moedas[2].cotacoes.pesoArgentino;
                break;
        }
    }

    // EUR
    if (valorMoedaSelecionada === "EUR") {
        switch (valorMoedaDestinoSelecionada) {
            case "BRL":
                valorConvertido = valorDigitado * moedas[3].cotacoes.real;
                break;
            case "USD":
                valorConvertido = valorDigitado * moedas[3].cotacoes.dolar;
                break;
            case "CNY":
                valorConvertido = valorDigitado * moedas[3].cotacoes.yuan;
                break;
            case "EUR":
                valorConvertido = valorDigitado;
                break;
            case "GBP":
                valorConvertido = valorDigitado * moedas[3].cotacoes.libra;
                break;
            case "ARS":
                valorConvertido = valorDigitado * moedas[3].cotacoes.pesoArgentino;
                break;
        }
    }

    // GBP
    if (valorMoedaSelecionada === "GBP") {
        switch (valorMoedaDestinoSelecionada) {
            case "BRL":
                valorConvertido = valorDigitado * moedas[4].cotacoes.real;
                break;
            case "USD":
                valorConvertido = valorDigitado * moedas[4].cotacoes.dolar;
                break;
            case "CNY":
                valorConvertido = valorDigitado * moedas[4].cotacoes.yuan;
                break;
            case "EUR":
                valorConvertido = valorDigitado * moedas[4].cotacoes.euro;
                break;
            case "GBP":
                valorConvertido = valorDigitado;
                break;
            case "ARS":
                valorConvertido = valorDigitado * moedas[4].cotacoes.pesoArgentino;
                break;
        }
    }

    // ARS
    if (valorMoedaSelecionada === "ARS") {
        switch (valorMoedaDestinoSelecionada) {
            case "BRL":
                valorConvertido = valorDigitado * moedas[5].cotacoes.real;
                break;
            case "USD":
                valorConvertido = valorDigitado * moedas[5].cotacoes.dolar;
                break;
            case "CNY":
                valorConvertido = valorDigitado * moedas[5].cotacoes.yuan;
                break;
            case "EUR":
                valorConvertido = valorDigitado * moedas[5].cotacoes.euro;
                break;
            case "GBP":
                valorConvertido = valorDigitado * moedas[5].cotacoes.libra;
                break;
            case "ARS":
                valorConvertido = valorDigitado;
                break;
        }
    }
    // Atualiza o resultado no parágrafo
    resultadoParagrafo.textContent = `Valor convertido: ${valorConvertido.toFixed(
        2
    )} ${document.querySelector("#moeda-destino").value}`;
}

// Faz com que quando o botão for clicado execute a função
document.getElementById("btn").addEventListener("click", converterMoeda);
