
// Callback -> passa uma função como argumento de outra função & executa a função após finalização de algum processo assíncrono

let alunos = ["Adriana", "Vinicius", "Marcia", "José"];

function inserirAlunos(nome, callback){

    //Simula delay de um servidor
    setTimeout(() => { 
        alunos.push(nome); 
        callback();
    }, 1000)

}

function listarAlunos(){
    console.log(alunos);
}

inserirAlunos("Igor", listarAlunos);
