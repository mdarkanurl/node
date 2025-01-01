const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer( (req, res) => {
    res.write('Hello, I\'m trying to type fast. Yes, I\'ll make mistake but I won\'t give up, Will you?');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`your server is running at http://${hostname}:${port}`);
});