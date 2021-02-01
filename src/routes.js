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

app.get('/users', function (request, response) {
    const User = new UserController();

    response.status(201).json(User.index(request, response));
});

module.exports = app;