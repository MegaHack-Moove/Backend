const { Router } = require('express')
const routes = Router();
const UsersController = require('./Controller/UsersController')

routes.get('/', (req, res, next) => {
    res.send('OK');
});

routes.post('/register', UsersController.register);
routes.post('/login', UsersController.login);

module.exports = routes;