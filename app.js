/*//function statment
let greet = () =>{
    console.log("hi");
}
greet();

//function are first-class
let logGreetings = (fn) =>{
    fn();
}
logGreetings(greet);

//function expression
let greetMe = ()=>{
    console.log("Hi Leonardo");
}
greetMe();

//it's first-class
logGreetings(greetMe);

//use a function expression on the fly
logGreetings(()=>{
    console.log("Hola");
})*/
//getting module to do so
var greet = require('./greet.js');
greet();