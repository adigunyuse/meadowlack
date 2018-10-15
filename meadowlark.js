var express = require('express');

var app = express();

var fortune = require('./libs/fortunes');



app.set('port' , process.env.PORT || 3000);

app.set('view engine' , 'pug');

app.set('views' , __dirname + '/views');

app.use(express.static(__dirname + '/public'));


app.get('/' , function(req , res) {

				res.render('home');
});

app.get('/about' , function(req , res) {

	var ranFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

				res.render('about' , {'fortune' : fortune.fortune()});
});

app.use(function(req , res) {

				res.status(404);

					res.render('404');
});

app.use(function(err , req , res , next) {

			console.error(err);

				res.status(500);

					res.render('500');
});

app.listen(app.get('port'), function(){

		console.log('Server created and boot up successfully');
});