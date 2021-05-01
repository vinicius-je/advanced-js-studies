// Higher order function  -> filter, map and reduce

// Filter -> recebe um callback, passando todos os elementos para o mesmo, assim que verifica a veracidade ele mantem esse elemento, e ao final do processo retorna um novo array com os elemetos filtrados

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35),
]

let jogadores = [
    novoAluno("Igor", 23),
    novoAluno("Vinícius", 45),
    novoAluno("Leo", 29),
    novoAluno("Michele", 35),
]

function temMenosde30(aluno){
    return aluno.idade < 30
}

function temMaisde30(aluno){
    return aluno.idade > 30
}

// let alunosComMenosde30 = alunos.filter(temMenosde30);
// let alunosComMaisde30 = alunos.filter(temMaisde30);

// Destrichando o filter
function filtro(callback){

    let alunosFiltrados = [];
    for(let aluno of this){
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }

    return alunosFiltrados;
}

alunos.filtro = filtro;
jogadores.filtro = filtro;

console.log(alunos.filtro(temMenosde30));
console.log(jogadores.filtro(temMenosde30));
