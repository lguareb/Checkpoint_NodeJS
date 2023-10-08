var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   // creating server

    //handle incomming requests here..
    if (req.url == '/') { //check the URL of the current request
        // set response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // set response content    
        res.write('<h1>Hello Node!!!!</h1>');
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found\n');
        res.end();
    }
});

server.listen(3000); // listen for any incoming requests

console.log('Node.js web server at port 3000 is running..')