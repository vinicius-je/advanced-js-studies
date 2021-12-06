// firstClassCitizens
// funcões -> podem ser passadas como argumentos em outras funções, também podem serem retornadas
function areaDoRetangulo(b, h){
    return b * h
}

function areaDoTriangulo(b, h){
    return (b * h) / 2
}

function exercutar(f){
    return f
}

const calcularAreaRetangulo = exercutar(areaDoRetangulo)
const calcularAreaRTriangulo = exercutar(areaDoTriangulo)

console.log(calcularAreaRetangulo(2, 5))
console.log(calcularAreaRTriangulo(2, 5))