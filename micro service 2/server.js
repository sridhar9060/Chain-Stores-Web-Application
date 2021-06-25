
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 7000 ;
const uploadRoute = require('./routes/upload');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db_url = 'mongodb+srv://sridhar9060:sridhar9060@cluster0.1oznl.mongodb.net/stock?retryWrites=true&w=majority'

mongoose.connect(db_url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
}, () => {
    console.log('database connected successfully');
})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/upload" , uploadRoute );


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${ port }`)
})
