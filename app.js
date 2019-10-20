var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routes = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  let { status = 500, message = 'Something went wrong', errors = [] } = err;
  res.status(status).send({
    error: true,
    status: status,
    message: message,
    errors: errors,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined
  });
});

module.exports = app;
