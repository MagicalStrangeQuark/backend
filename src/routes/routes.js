
const Router = require('express').Router();

/**
 * 
 */
Router.use('/', (request, response, next) => {
    console.log(new Date());

    next();
});

/**
 * 
 */
Router.get('/', (request, response) => {
    response.status(200).json({});
});

/**
 * How To Modularize Routes With The Express Router
 * 
 * @link https://medium.com/@catherinelau/how-to-modularize-routes-with-the-express-router-5ce46f9bb2bd
 * 
 * @author Cat Lau
 */
const UserRouter = require('./UserRouter');

Router.use('/users', UserRouter);

module.exports = Router;