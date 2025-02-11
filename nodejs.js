touch index.js
nano index.js
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello, this is a microservice!');
});