import { Router } from 'express';

import { save, getAllByUserId } from '../controllers/UsersHasProjectsController.js';

const UsersHasProjectsRouter = Router();

UsersHasProjectsRouter.post('/', save);
UsersHasProjectsRouter.get('/', getAllByUserId);

export default UsersHasProjectsRouter;
