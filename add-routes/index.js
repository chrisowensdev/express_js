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

const catsRoute = (req, res) => {
    res.status(200).send('Meow!').end();
};

const dogsRoute = (req, res) => {
    res.status(200).send('Woof!').end();
};

const catsAndDogsRoute = (req, res) => {
    res.status(200).send('Dogs and cats living together...mass hysteria').end();
};

// Routes
app.get('/', rootController);
app.get('/cats', catsRoute);
app.get('/dogs', dogsRoute);
app.get('/cats_and_dogs', catsAndDogsRoute);