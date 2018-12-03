const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const mongoose = require("mongoose");
const routes = require("./routes");
var cookieParser = require('cookie-parser');

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

if (isProduction === true) {
  app.use(express.static("client/build"));
}


// Configure mongoose to connect to the Mongo DB
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/give_time", { useNewUrlParser: true });

app.use(routes);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});

