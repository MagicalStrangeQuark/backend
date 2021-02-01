const express = require('express');
const UserController = require('./User/UserController');

const app = express();

app.get('/', (request, response) => {
    response.status(200).json({});
});

app.get('/users', function (request, response) {
    const User = new UserController();

    response.status(201).json(User.index());
});

module.exports = app;