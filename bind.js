
// Bind -> retorna uma função passando referência ao this

function exibirNumeroRodas(){
    console.log("Este veículo possui " + this.rodas + " rodas")
}

let carro = {
    rodas: 4,
}

let moto = {
    rodas: 2,
}

let bindedFunction = exibirNumeroRodas.bind(carro);
bindedFunction();