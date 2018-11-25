var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // res.end('You are in Home page.');
    res.sendFile(__dirname + '/views/home.html') ;
});

app.get('/about', function(req, res){
    // res.end('You are in About page.');
    res.sendFile(__dirname + '/views/about.html') ;
});

app.get('/profile/:name', function(req, res){
    // res.end('You requested to see the profile with the id ' + req.params.id) ;
    data = {
        age: 31,
        job: 'Develper',
    }
    res.render('profile', {
        name: req.params.name,
        data: data,
    });
});

app.listen(3000);