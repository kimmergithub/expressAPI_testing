'use strict';

const express = require('express');

const app = express();

app.listen(process.env.port || 3000, function(){
	console.log('now listening on app.listen!');
});
