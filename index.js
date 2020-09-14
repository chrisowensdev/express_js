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

const greetController = (req, res) => {
    let snippet = `Hello There!`;
    if (req.params.name !== undefined) {
        snippet = `Hello, ${req.params.name}!`;
    }
    res.status(200).send(snippet).end();
};

const htmlResponseController = (req, res) => {
    let snippet = `<h1>Hello There!</h1>`;
    if (req.params.name !== undefined) {
        snippet = `<h1>Hello, ${req.params.name}!</h1>`;
    }
    res.status(200).send(snippet).end();
};

// Routes
app.get('/', rootController);
app.get('/cats', catsRoute);
app.get('/dogs', dogsRoute);
app.get('/cats_and_dogs', catsAndDogsRoute);
app.get('/greet/:name?', greetController);
//app.get('/greet/:name?', htmlResponseController);
