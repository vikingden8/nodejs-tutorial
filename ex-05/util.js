var counter = function(arr){
    return "There are " + arr.length + " elements in this array."; 
}

/*
module.exports.counter = function(arr){
    return "There are " + arr.length + " elements in this array."; 
}
*/

var adder = function(a, b){
    return `The sum is ${a+b}.`;
}

/*
module.exports.adder = function(a, b){
    return `The sum is ${a+b}.`;
}
*/

var pi = 3.142;

/*
module.exports.pi = 3.142;
*/

/*
module.exports.counter = counter ;
module.exports.adder = adder ;
module.exports.pi = pi ;
*/

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi,
}