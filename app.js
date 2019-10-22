const http = require('http');
console.log("Stub server starting...");

var handler = function(request, response) {
    console.log("Received request from " + request.method); 
    response.statusCode = 200;
    response.setHeader('Content-Type','application/json');
    response.end("{\"key\":\"value\"}");
};

var www = http.createServer(handler); 
www.listen(8080);