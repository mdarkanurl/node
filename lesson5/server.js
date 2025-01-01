const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer( (req, res) => {
    res.writeHead(202, {'content-type':'text/html'});
    res.write('<h1> Hello, I\'m trying to type fast. Yes, I\'ll make mistake but I won\'t give up, Will you? </h1>');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`your server is running at http://${hostname}:${port}`);
});