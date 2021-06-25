const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Stock = require('../models/stock');

router.post('/' , async (req , res) => {
    const stock = new Stock({
        productName: req.body.productName,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,
        location: req.body.location

    });

    await stock.save();
})


module.exports = router;
