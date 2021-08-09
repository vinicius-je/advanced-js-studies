// toda classe extendida de outra classe herda todos os metódos
// metódos herdados podem ser adaptado conforme a necessidade da classe
const Person = require('./Person')
const Alumn = require('./Alumn')


let jane = new Alumn('Jane', 21, '1001');
jane.greetings()

let janeDoe = new Person('Jane Doe', 21)
janeDoe.greetings()