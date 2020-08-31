const { Router } = require('express')
const routes = Router();
const UsersController = require('./Controller/UsersController')

routes.get('/', (req, res, next) => {
    res.send('OK');
});

routes.post('/', UsersController.create);

module.exports = routes;