// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Hello There');
//     res.write('\nThis is it');
//     res.end('This is how it happened');
// }).listen(80);

// const fs = require('fs');
// fs.appendFile('ex1.js', 'console.log("You did it")', (err) => console.log("Done"));
// fs.unlink('ex1.js', (err) => console.log("deleted"));

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('This is it');
});

app.get('/first', (req, res) => {
    const id = req.query.id;
    if (id != undefined) {
        res.send("hello world " + id);
    }
    else {
        res.send("hello world ");
    }
})

app.listen(9000, (req, res) => {
    console.log("running");
});