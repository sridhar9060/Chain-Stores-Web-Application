
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8000 ;
const updateRoute = require('./routes/update')
const viewRoute = require('./routes/viewlist');
const locationroute = require("./routes/locationlist")
const filter = require("./routes/filter")
const deleteitem = require("./routes/delete")

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

app.use("/update" , updateRoute);
app.use("/viewlist" , viewRoute );
app.use("/locationlist", locationroute);
app.use("/filter",filter);
app.use("/deleteitem",deleteitem);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${ port }`)
})
