const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostName = '127.0.0.1';

const server = http.createServer( (req, res) => {
    const myFunc = (urlName, statusCode) => {
        fs.readFile(`${urlName}.html`, 'utf-8', (error, data) => {
            res.writeHead(`${statusCode}`, {"Content-type" : "text/html"});
            res.write(data);
            res.end();
        });
    }
    if(req.url === '/') {
        myFunc('index', 200);
    } else if(req.url === '/contact') {
        myFunc('contact', 200);
    } else if(req.url === '/about') {
        myFunc('about', 200);
    } else {
        myFunc('error', 404);
    }
});

server.listen(PORT, hostName, () => {
    console.log(`Your server is running at http://${hostName}:${PORT}`);
});