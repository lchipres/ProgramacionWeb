//uso del emisor de eventos
var Emitter = require('events');//node tiene ya definido 'events'
var eventConfig = require('./config.js');
var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('Configuracion lista')
});

emtr.on('greet',function() {
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', function() {
    console.log('A greeting ocurred!');//comportamiento de la funcion
});//same event 2 different functions

console.log('Hello');
emtr.emit('greet');
emtr.emit(eventConfig.GREET);