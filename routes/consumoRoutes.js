import express from 'express';
import { getAll, create, update, remove, media } from '../controllers/consumoController.js';

const router = express.Router();

router.get('/', getAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
router.get('/media', media)

export default router;
