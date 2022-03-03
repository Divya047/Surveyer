const express = require('express');
const Updateroutes = express.Router();
const Survey = require('../model/db');


Updateroutes.get('/', async (req, res) => {
    try {
        res.render('pageofupdate', { user: '' });
    }
    catch (error) {
        res.send('Error:' + error.message);
    }
})



Updateroutes.get('/:id', async (req, res) => {
    const onedata = await Survey.findById(req.params.id);
    res.render('updateinfo', {
        name: onedata.name,
        email: onedata.email,
        age: onedata.age,
    })
})

Updateroutes.post('/', async (req, res) => {
    const data = await Survey.find(req.body);
    if (data.length == 0) {
        res.render('pageofupdate', {
            user: `Email Address not found`
        });
    }
    else {
        res.redirect(`/update/${data[0]._id}`);
    }
})

Updateroutes.post('/:id', async (req, res) => {
    Survey.updateMany({ "_id": req.params.id },
        {
            $set: {
                "name": req.body.name,
                "email": req.body.email,
                "age": req.body.age,
                "options": req.body.options
            }
        }, (err, data) => {
            console.log('');
        })
})

module.exports = Updateroutes;