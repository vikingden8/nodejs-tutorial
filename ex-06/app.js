var events = require('events');
var util = require('util');

var myEmitter = new events.EventEmitter() ;

myEmitter.on('someEvent', function(message){
    console.log('someEvent : ' + message) ;
})

myEmitter.emit('someEvent', 'Hello Node Events.') ;

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter) ;

var viking = new Person('Viking') ;
var jyn = new Person('Jyn') ;
var yue = new Person('Yue') ;

var persons = [viking, jyn, yue] ;
persons.forEach(function(person){
    person.on("speak", function(message){
        console.log(person.name + ' saied: ' + message) ;
    });
});

viking.emit("speak", 'hey dudes.') ;
jyn.emit("speak", "Hi Node.") ;
yue.emit("speak", " Hello World.") ;
