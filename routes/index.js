const routes = require('express').Router();
const authorization = require('../middleware/authorization');
const login = require('../controller/login')
const encoder = require('../controller/encoder');


routes.post('/login', login)
routes.post('/encoder', authorization, encoder)

module.exports = routes
