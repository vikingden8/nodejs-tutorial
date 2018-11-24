var fs = require('fs') ;

// delete file
fs.unlink('deleteMe.txt', function(err, data){
    if (err){
        console.log(err) ;
    }else{
        console.log('delete successfully.');
    }
    
});

fs.mkdir('stuff', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log('create stuff directory successfully.');
    }
});

fs.rmdirSync('stuff') ;