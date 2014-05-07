var express = require('express');
var app = express();
var fs = require('fs');


app.get('/:filename', function(req, res) {
	fs.readFile('public/'+req.params.filename, function(err, data){
		console.log('a');
		res.header('Content-Type', 'text/html'); 
		res.send(data);
	});

	console.log('B');
});

var server = app.listen(5594, function() {
	console.log('Express server listening on port ' + server.address().port);
});

