'use strict';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const express = require('express');
const app = express();

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

// Controllers
const rootController = (req, res) => {
    res.status(200).send('Hello World').end();
};

// Routes
app.get('/', rootController);