const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Stock = require('../models/stock');

router.get('/' , (req , res) => {
    Stock.find({} ,(err , result) => {
        if (err) {
            throw err;
        }
        if (result) {
            res.json(result);            
        }else {
            res.send(JSON.stringify({
                error: 'Error'
            }))
        }
    });

})

module.exports = router;