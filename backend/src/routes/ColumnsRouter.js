import { Router } from 'express';

import { getAll, save, findOneBy, deleteBy } from '../controllers/ColumnsController.js';

import { Auth } from '../middleware/Auth.js';

const ColumnsRouter = Router();

ColumnsRouter.get('/', getAll);
ColumnsRouter.post('/', save);
ColumnsRouter.get('/:id', findOneBy);
ColumnsRouter.delete('/:id', deleteBy);

export default ColumnsRouter;
