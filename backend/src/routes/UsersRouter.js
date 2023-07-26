import { Router } from 'express';

import { getAll, register, authentication } from '../controllers/UsersController.js';

import { Auth } from '../middleware/Auth.js';

const UsersRouter = Router();

UsersRouter.get('/', Auth, getAll);
UsersRouter.post('/', register);
UsersRouter.post('/auth', authentication);

export default UsersRouter;
