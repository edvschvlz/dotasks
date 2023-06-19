import { Router } from 'express';

import { getAll } from '../controllers/UsersController.js';

const UsersRouter = Router();

UsersRouter.get('/', getAll);
// UsersRouter.post('/', register);

export default UsersRouter;
