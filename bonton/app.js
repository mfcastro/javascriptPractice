// JavaScript source code
var express = require('express');
var path = require('path');

var app = express(); //our server

app.set('view engine', 'pug'); // allows to set varialbes for express
 
app.use(express.static(path.join(__dirname, 'public')));


//app.use(express.static('node_modules'));
//app.use(express.static('assets'));


app.get('/', function (req, res) { //references the root route. '/' refers to that.
	res.render('index'); //regular JS object. Can be data from JSON file
});


app.get('/about', function (req, res) {
	res.render('about');
});

app.get('/woman', function (req, res) {
	res.render('woman');
});

app.get('/activewear', function (req, res) {
	res.render('activewear');
});

app.get('/UALeggings', function (req, res) {
	res.render('UALeggings');
});




app.get('*', function (req, res) { //must be at the end, but the * tells it that if you get something else to do this. 
    
    res.send('Bad Route');
});


var server = app.listen(3000, function () {
    console.log('Listening on port 3000');
});
