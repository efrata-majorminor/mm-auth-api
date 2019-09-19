const Manager = require('mm-module').auth.AccountManager;
const JwtRouterFactory = require('./jwt-router-factory');
const apiVersion = '1.0.0';

function getRouter() {
    var router = JwtRouterFactory(Manager, {
        version: apiVersion,
        defaultOrder: {
            "_createdDate": 1
        }
    });
    return router;
}

module.exports = getRouter;