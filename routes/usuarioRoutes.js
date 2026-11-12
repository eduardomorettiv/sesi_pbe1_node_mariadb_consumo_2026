import express from 'express';
import { getAll, create, update, remove, login } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', getAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
router.post('/login', login);

export default router;
