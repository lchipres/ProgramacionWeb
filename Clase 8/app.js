var util = require('util');

function Person(){
    this.firstname = 'Jhon';
    this.lastname = 'Doe';
}

Person.prototype.greet = function(){
    console.log('Hello '+this.firstname+' '+this.lastname);
}

function Policeman(){
    Person.call(this);
    this.badgenumber = '1234';

}

util.inherits(Policeman, Person);//Genera instancia, invvoques greet method y policeman heredad de person
var officer = new Policeman();
officer.greet();