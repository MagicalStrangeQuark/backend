module.exports = (app) => {
    const Auth = require('../use-cases/Auth/AuthController.js');

    app.post('/login', (request, response) => {
        return Auth.login(request, response);
    });

    app.delete('/logout', (request, response) => {
        return Auth.logout(request, response);
    });
};