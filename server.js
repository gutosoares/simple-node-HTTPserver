// Simple HTTP server made in NodeJS

var http = require('http');
var file = require('fs');

// build my server
var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});

	// try to resquest webservice page
	if(request.url == "/webservice") {
    	file.readFile('./pages/webservice.html', function(err, html){
    		response.writeHeader(200, {'Content-Type': 'text/html'});
    		response.write(html);
			response.end();
    	});
	}

	// try to request sd page
	else if(request.url == "/sd") {
		file.readFile('./pages/sd.html', function(err, html){
    		response.writeHeader(200, {'Content-Type': 'text/html'});
    		response.write(html);
			response.end();
    	});
	}

	// Page missing, ERROR 404
	else {
		file.readFile('./pages/404.html', function(err, html){
    		response.writeHeader(200, {'Content-Type': 'text/html'});
    		response.write(html);
			response.end();
    	});
	}
});

// Star server to listening on port 3000
server.listen(3000, function(){
	console.log('Server star running on port 3000');
});
