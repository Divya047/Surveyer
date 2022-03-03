const express = require('express');
const excel = require('exceljs');
const Downloadroutes = express.Router();
const Survey = require('../model/db');
let survey = [];

Downloadroutes.get('/', async (req, res) => {
    try {
        survey = await Survey.find({});
    }
    catch (error) {
        res.send('Error:' + error.message);
    }
    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Survey');
    worksheet.columns = [
        { header: 'Name', key: 'name', width: 20 },
        { header: 'Email', key: 'email', width: 30 },
        { header: 'Age', key: 'age', width: 10 },
        { header: 'Selected Option', key: 'options', width: 30, outlineLevel: 1 }
    ];
    worksheet.addRows(survey);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'Survey.xlsx');
    workbook.xlsx.write(res).then(function () {
        res.end();
    });
});

module.exports = Downloadroutes;