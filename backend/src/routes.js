const express = require('express');

const routes = express.Router();

const {index, show, create} = require('./controllers/carrosController');

routes.get('/', index);

routes.get('/:id', show);

routes.post('/', create);

module.exports = routes;