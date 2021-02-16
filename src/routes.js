const express = require('express');

const bodyParser = require('body-parser');

const UserController = require('./User/UserController');
const User = new UserController();

const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

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

app.post('/users', (request, response) => {
    return User.store(request, response);
});

module.exports = app;