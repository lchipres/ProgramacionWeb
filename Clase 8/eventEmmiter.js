var EventEmitter = require('events');
var util = require('util');

/*Class Greeter Extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hello world';
    }

    greet(data){
        console.log('${this.greeting}: ${data});
        this.emit(greet,data);
    }
}*/

class Greetr {
    constructor() {
        EventEmitter.call(this);
        this.greeting = 'Hello world';
    }
    greet(data) {
        console.log(this.greeting + ': ' + data);
        this.emit('greet', data);
    }
}

util.inherits(Greetr, EventEmitter);

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('Someone greeted: '+data);
});

greeter1.greet('Todd');