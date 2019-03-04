//IIFE(Inmedeatly Invoked Function Expression)
var firstame = 'Jane';

(function(lastname){

    var firstame = 'John';//Protected
    console.log(firstame);
    console.log(lastname);

}('Doe'/*Inmideatly invoked*/ ))//function expression (function()) different from function statement

console.log(firstame);