const express = require('express');

const bodyParser = require('body-parser');

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

require('./routes/UserRouter.js')(app);

module.exports = app;