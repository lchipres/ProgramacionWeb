var util = require('util');
'use strict';

class Person{
    constructor(firstname,lastname){
        this.firstname = 'Jhon';
        this.lastname = 'Doe';
    }
    greet(){
    console.log('Hello '+this.firstname+' '+this.lastname);
    }
}//el use strict sirve para hacer del codigo como solemos conocerlo

var john = new Person('John','Doe');
john.greet();

var jane = new Person('Jane','Doe');
jane.greet();

console.log(john.__proto__);//Comprobar que sea una person
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);//son prototipos iguales?