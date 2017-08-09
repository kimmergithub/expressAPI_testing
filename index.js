'use strict';
const routes = require('./routes/api');
const express = require('express');

const app = express();

// this tell express that we want to use our routes from our routes page on api.js... the use method.
app.use('/api', routes);

app.get('/', function(){
	console.log('GET request!');
})

app.listen(process.env.port || 3000, function(){
	console.log('now listening on app.listen!');
});
