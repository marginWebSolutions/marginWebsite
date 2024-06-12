const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Create express app
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware logging
app.use((req, res, next) => {
	console.log(`${req.method} ${req.path}`);
	next();
});

// Middleware that handle the data of the request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/captcha', require('./routes/captcha.routes'));
app.use('/api/contact', require('./routes/email.routes'));

module.exports = app;
