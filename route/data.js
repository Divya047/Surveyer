const express = require('express');
const dataroutes = express.Router();
const Survey = require('../model/db');

dataroutes.get('/', async (req, res) => {
    const survey = await Survey.find();
    res.json(survey);
})

module.exports = dataroutes;