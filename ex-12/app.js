var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.end('You are in Home page.');
});

app.get('/about', function(req, res){
    res.end('You are in About page.');
});

app.get('/profile/:id', function(req, res){
    res.end('You requested to see the profile with the id ' + req.params.id) ;
});

app.listen(3000);