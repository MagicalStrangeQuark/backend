module.exports = (app) => {
    const UserController = require('../User/UserController');
    const User = new UserController();

    app.get('/users', (request, response) => {
        return User.index(request, response);
    });

    app.get('/users/:id', (request, response) => {
        return User.show(request, response);
    });

    app.post('/users', (request, response) => {
        return User.store(request, response);
    });
};