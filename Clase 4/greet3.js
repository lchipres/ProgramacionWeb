function Geetr(){
    this.greeting = 'Hello World greet3!';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Geetr();