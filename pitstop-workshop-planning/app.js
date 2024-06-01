var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

//routes
var workshopRouter = require('./routes/workshop');

var app = express();

// CORS middleware for all routes
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api/workshop', workshopRouter);

// subscriptions to message broker
require("./message-bus/receive/customer.added").start();
require("./message-bus/receive/customer.deleted").start();
require("./message-bus/receive/vehicle.added").start();
require("./message-bus/receive/vehicle.deleted").start();
module.exports = app;
