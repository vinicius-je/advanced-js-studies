
// Async await

let alunos = ["Adriana", "Igor", "Marcia", "José"];

function inserirAlunos(nome){
    let promise = new Promise(function(resolve, reject){
        //Simula delay de um servidor
        setTimeout(() => { 
            alunos.push(nome); 
            let error = false;

            if(!error){
                resolve()
            }else{
                reject({msg:"Algo de errado não está certo!"})
            }
        }, 1000)
    })
    return promise
}

function listarAlunos(){
    console.log(alunos);
}

async function executar(){
    await inserirAlunos("Vinicius");
    listarAlunos();
}

executar()