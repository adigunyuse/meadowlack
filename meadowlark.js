var express = require('express');

var app = express();

var handlebars = require('express-handlebars').create({'defaultLayout' : 'main'});

var fortune = require('./libs/fortunes');

var aweather = require('./icontrollers/get-weather');

app.engine('handlebars' , handlebars.engine);

app.set('port' , process.env.PORT || 3000);

app.set('view engine' , 'handlebars');

app.set('views' , __dirname + '/views');

app.disable('x-powered-by');

app.use(express.static(__dirname + '/public'));

app.use(function(req , res , next) {

		res.locals.showTest = app.get('env') !== 'production' && req.query.test == 1;

		if (res.locals.partials) {

					res.locals.partials = {};

				}

					res.locals.partials = aweather;

			next();
});


app.get('/' , function(req , res) {

				res.render('home');
});

app.get('/about' , function(req , res) {

				res.render('about', {'fortune' : fortune.fortun(),	'pageTestScript' : '/qa/tests-about.js' } );
});

app.get('/tours/hood-river', function(req, res){
													
					res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function(req, res){
	
					res.render('tours/request-group-rate');
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