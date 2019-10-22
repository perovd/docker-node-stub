const http = require('http');
const os = require('os');
console.log("Kubia server starting...");

var handler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress); 
    response.statusCode = 200;
    response.setHeader('Content-Type','application/json');
    response.end("{\"test\":\"ttttt\"}");
};

var www = http.createServer(handler); 
www.listen(8080);