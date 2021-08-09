class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greetings(){
        console.log('Hi, how are you? My name is', this.name)
    }
}

// let jane = new Person('jane', 21)
// jane.greetings()

module.exports = Person
