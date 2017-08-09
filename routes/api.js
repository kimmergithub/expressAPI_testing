'use strict';

const express = require('express');
const router = express.Router();

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
  res.send({type: 'GET'});
});

// add a new ninja
router.post('/ninjas', function(req, res){
  res.send({type: 'POST'});
});

// update ninja in db
router.put('/ninjas/:id', function(req, res){
  res.send({type: 'PUT'});
});

// delete ninja from the db
router.delete('ninjas/:id', function(req, res){
  res.send({type: 'DELETE'});
});

// this is how the other files now to use this!
module.exports = router;
