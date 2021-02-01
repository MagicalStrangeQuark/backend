const express = require('express');

const UserController = require('./User/UserController');

const app = express();

app.use('/', (request, response, next) => {
    console.log(new Date());

    next();
});

app.get('/', (request, response) => {
    response.status(200).json({});
});

app.get('/users', (request, response) => {
    const User = new UserController();

    return User.index(request, response);
});

app.get('/users/:id', (request, response) => {
    const User = new UserController();

    return User.show(request, response);
});

module.exports = app;