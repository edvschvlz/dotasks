import { Router } from 'express';

import { getAll, save, getById } from '../controllers/UsersHasProjectsController.js';

const UsersHasProjectsRouter = Router();

UsersHasProjectsRouter.get('/', getAll);
UsersHasProjectsRouter.post('/', save);
UsersHasProjectsRouter.get('/:id', getById);

export default UsersHasProjectsRouter;
