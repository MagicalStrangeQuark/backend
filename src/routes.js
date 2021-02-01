const express = require('express');

const UserController = require('./User/UserController');
const User = new UserController();

const app = express();

app.use('/', (request, response, next) => {
    next();
});

app.get('/', (request, response) => {
    response.status(200).json({});
});

app.get('/users', (request, response) => {
    return User.index(request, response);
});

app.get('/users/:id', (request, response) => {
    return User.show(request, response);
});

module.exports = app;