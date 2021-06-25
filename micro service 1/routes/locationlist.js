const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Stock = require('../models/stock');

router.get('/' , async (req , res) => {
    await Stock.find().distinct('location',(err , result) => {
        if (err) {
            throw err;
        }
        if (result) {
            res.json(result); 
            console.log(result);           
        }else {
            res.send(JSON.stringify({
                error: 'Error'
            }))
        }
    });

})

module.exports = router;