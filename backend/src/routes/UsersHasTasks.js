import { Router } from 'express';

import { getAll, save, getById } from '../controllers/UsersHasTasksController.js';

const UsersHasTasksRouter = Router();

UsersHasTasksRouter.get('/', getAll);
UsersHasTasksRouter.post('/', save);
UsersHasTasksRouter.get('/:id', getById);

export default UsersHasTasksRouter;
