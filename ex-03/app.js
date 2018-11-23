// normal function
function sayHi(){
    console.log("Hi, Node.");
}

sayHi() ;

// function expression
var sayBye = function(){
    console.log("Bye, Node.");
}
sayBye();

// passing function as parmaters
function callFunction(func){
    func();
}

callFunction(sayHi) ;