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

// Desestruturar um objeto
dados.matricula = 1234;

let { ...copia} = dados;

copia.matricula = 5678;
console.log(dados);
console.log(copia);

// Arrays
let notas_turma1 = [10, 8, 9, 7];
let notas_turma2 = [4, 6, 2, 4];

let notas_turmas = [...notas_turma1, ...notas_turma2];
console.log(notas_turmas)

let aluno1 = {
    matricula: 1234,
    nome: "João",
    telefone: 987651234,
    cidade: "Vitória"
}

let aluno2 = {
    matricula: 5678,
    nome: "Marcos",
    telefone: 98769872,
    cidade: "Vitória"
}

let alunos = [aluno1, aluno2]

let [joao, marcos] = alunos;

console.log(joao);
console.log(marcos);

