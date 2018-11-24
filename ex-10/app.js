var http = require('http') ;
var fs = require('fs') ;

var myReadStream = fs.createReadStream('ReadContent.txt') ;

myReadStream.on('data', function(data){
    console.log('new chunk received:');
    console.log(data.toString());
});