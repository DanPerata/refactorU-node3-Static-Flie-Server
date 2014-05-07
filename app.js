var express = require('express');
var app = express();
var fs = require('fs');


app.get('/', function(req, res) {
	fs.readFile('data.txt', function(err, data){
		res.header('Content-Type', 'text/html'); 
		res.send(data);
	});
});

var server = app.listen(5594, function() {
	console.log('Express server listening on port ' + server.address().port);
});

