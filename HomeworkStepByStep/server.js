const dotenv = require('dotenv');
const http = require('http');

const server = http.createServer();

server.listen(1234, (req, res) => {
    console.log('Im up biatch');
});