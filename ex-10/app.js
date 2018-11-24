var http = require('http') ;
var fs = require('fs') ;

var myReadStream = fs.createReadStream('ReadContent.txt', 'utf8') ;
var myWriteStrem = fs.createWriteStream('WriteContent.txt', )

/*
myReadStream.on('data', function(data){
    console.log('new chunk received:');
    console.log(data.toString());
    myWriteStrem.write(data);
});
*/

myReadStream.pipe(myWriteStrem);