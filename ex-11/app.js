var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url) ;
    if (req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/plain'}) ;
        res.end('Hello Node Server') ;
    }else{
        res.writeHead(500, {'Content-Type':'text/plain'}) ;
        res.end('Node Server route not exist...') ;
    }
    
}) ;

server.listen(3000, '127.0.0.1') ;
console.log('Now listening to port 3000...') ;