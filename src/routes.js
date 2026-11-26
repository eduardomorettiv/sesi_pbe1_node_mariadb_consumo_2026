import express from 'express';
import * as usuarioController from './controllers/usuarioController.js';
import * as consumoController from './controllers/consumoController.js';

export const usuarioRoutes = express.Router();

usuarioRoutes.post('/login', usuarioController.login);
usuarioRoutes.get('/', usuarioController.getAll);
usuarioRoutes.post('/', usuarioController.create);
usuarioRoutes.put('/:id', usuarioController.update);
usuarioRoutes.delete('/:id', usuarioController.remove);

export const consumoRoutes = express.Router();

consumoRoutes.get('/media', consumoController.media);
consumoRoutes.get('/', consumoController.getAll);
consumoRoutes.post('/', consumoController.create);
consumoRoutes.put('/:id', consumoController.update);
consumoRoutes.delete('/:id', consumoController.remove);