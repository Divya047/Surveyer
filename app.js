const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');
const url = 'mongodb://localhost/firstdb';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('open', () => console.log('connected to the database'));

app.use(express.static('Public'));
app.use('/Javascript', express.static(__dirname + '/Javascript'));
app.use('/Image', express.static(__dirname + '/Image'));

app.set('views', './view');
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.json());
const home = require('./route/Home.js');
app.use('/', home);

const data = require('./route/data.js');
app.use('/data', data);

const update = require('./route/update.js');
app.use('/update', update);

const deleted = require('./route/delete.js');
app.use('/delete', deleted);

const download = require('./route/download.js');
app.use('/download', download);

app.listen(8000, (req, res) => {
    console.log("running", 8000);
});