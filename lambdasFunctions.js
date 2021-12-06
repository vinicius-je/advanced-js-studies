// funções lambdas -> funções anônimas

let numeros = [1, 2, 3, 4, 5]

let dobrar = numeros.map((valor) => {
    return valor * 2
})

let numerosPares = numeros.filter((valor) => {
    return valor % 2 == 0
})

console.log(dobrar)
console.log(numerosPares)