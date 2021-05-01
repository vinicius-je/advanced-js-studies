// Spread Operator 

let pessoa = {
    nome: "Jane Doe",
    idade: 25
}

let contato = {
    telefone: 86751298,
    email: "janedoe@email.com"
}

let dados = {...pessoa, ...contato, cidade: "Vitória"};
console.log(dados)

// Arrays

let notas_turma1 = [10, 8, 9, 7];
let notas_turma2 = [4, 6, 2, 4];

let notas_turmas = [...notas_turma1, ...notas_turma2];
console.log(notas_turmas)
