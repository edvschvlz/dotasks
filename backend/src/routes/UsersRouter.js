import { Router } from 'express';

import { getAll, register } from '../controllers/UsersController.js';

const UsersRouter = Router();

UsersRouter.get('/', getAll);
UsersRouter.post('/', register);

export default UsersRouter;
