const UserController = require('./UserController');

const Router = require('express').Router();

const User = new UserController();

Router.get('/', (request, response) => {
    return User.index(request, response);
});

Router.get('/:id', (request, response) => {
    return User.show(request, response);
});

module.exports = Router;