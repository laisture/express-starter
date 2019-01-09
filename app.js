var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var app = express();
require('dotenv').config();
let port = process.env.PORT || '3000';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Used to serve static files, such as html, css & JS files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app;
