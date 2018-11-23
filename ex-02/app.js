// global objects
console.log("Hellom, Node JS.");

// setTimeout
setTimeout(function(){
    console.log("3 seconds has passed...") ;
}, 3000);

// setInterval
var time = 0 ;
var timer = setInterval(function(){
    time += 2 ;
    console.log(time + " seconds has passed...");
    if (time > 4){
        clearInterval(timer);
    }
}, 2000);

// __dirname
console.log(__dirname) ;
console.log(__filename) ;