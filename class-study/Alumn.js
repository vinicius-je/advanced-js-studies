const Person = require('./Person')

class Alumn extends Person{
    constructor(name,age, classrom){
        super(name, age)
        this.classrom = classrom;
    }
    greetings(){
        console.log('Hi, how are you? My name is', this.name, 'and i study at class', this.classrom)
    }
}

module.exports = Alumn;