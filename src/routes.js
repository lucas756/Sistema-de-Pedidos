import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ClienteController from './app/controllers/ClienteController';
import PedidoController from './app/controllers/PedidoController';
import RestauranteController from './app/controllers/RestauranteController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/clientes', ClienteController.store);
routes.post('/pedidos', PedidoController.store);
routes.get('/pedidos', PedidoController.index);

routes.put('/pedidos/:id', PedidoController.update);

routes.post('/restaurante', RestauranteController.store);



export default routes;
