const express = require('express');
const Deleteroutes = express.Router();
const Survey = require('../model/db')

Deleteroutes.get('/', async (req, res) => {
    try {
        res.render('pageofdelete');
    }
    catch (error) {
        res.send('Error:' + error.message);
    }
})

Deleteroutes.post('/', async (req, res) => {
    Survey.deleteMany(req.body,(err,data)=>{console.log('data deleted')});
    res.redirect('http://localhost:8000')
})

module.exports = Deleteroutes;