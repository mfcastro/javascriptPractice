// JavaScript source code
var express = require('express');

var app = express(); //our server

app.set('view engine', 'pug'); // allows to set varialbes for express
 

//app.use(express.static('node_modules'));
//app.use(express.static('assets'));


app.get('/', function (req, res) { //references the root route. '/' refers to that.
	res.render('/site'); //regular JS object. Can be data from JSON file

});

//app.get('/woman', function (req, res) {
//	res.sendFile('woman.html');

//});



//app.get('/woman', function (req, res) {
//	res.send('woman.html');
//});




//app.get('/about', function (req, res) { //references the a page that displays me
//	res.render('default', {
//		title: 'About Us',
//		classname: 'about'
//	}); //regular JS object. Can be data from JSON file
//});


//app.get('/site', function (req, res) { //references the root route. '/' refers to that.
//	res.render('site'); //regular JS object. Can be data from JSON file
//});

//app.get('/who/:name?', function (req, res) { 
//    var name = req.params.name; // this is an array that express will create for us
//    res.send(name + ' was here');
//});

//app.get('/who/:name?/:title?', function (req, res) {
//    var name = req.params.name;
//    var title = req.params.title; 
//    res.send('<p>Name: '+ name + '<br> Title: '+ title + '</p>');
//});


app.get('*', function (req, res) { //must be at the end, but the * tells it that if you get something else to do this. 
    
    res.send('Bad Route');
});


var server = app.listen(3000, function () {
    console.log('Listening on port 3000');
});
