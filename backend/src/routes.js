const { Router } = require('express');
const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.post('/users/tasks/:id', TaskController.create);
routes.get('/users/tasks/:id', TaskController.index);

module.exports = routes;