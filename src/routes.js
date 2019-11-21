const { Router } = require('express');

const RequesterController = require('./app/controllers/RequesterController');

const routes = new Router();

routes.get('/first/:_groupId', RequesterController.first);

module.exports = routes;
