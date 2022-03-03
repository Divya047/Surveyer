const express = require('express');
const Homeroutes = express.Router();
const Survey = require('../model/db');

Homeroutes.get('/', async (req, res) => {
    try {
        res.render('form',{'email':''});
    }
    catch (error) {
        res.send('Error:' + error.message);
    }
})

Homeroutes.post('/', async (req, res) => {
    console.log(req.body); 
    const emailed = req.body.email;
    const findit = await Survey.find({ "email": emailed });
    if (findit.length != 0) {
        res.render('form',{'email':'Sorry! But the email is already used'});
    }
    else { 
        const ourdata = new Survey(req.body);
        const ans = await ourdata.save();
        console.log(ans);
        res.redirect('/');
    }
})

module.exports = Homeroutes;