var greet = require('./greet1');
greet();//returns variable

var greet2 = require('./greet2').greet;
greet2();//add propertie

var greet3 = require('./greet3');
greet3.greet();//object
greet3.greeting = 'Changed hello world!';

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();//BOB constructor
grtr.greet();//invokes method from*/

var greet5 = require('./greet5').greet;
greet5();

//object that returns what i want