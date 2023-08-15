import { Router } from 'express';

import {
  save,
  getAllByUserId,
  getAllUsersByProjectId,
  shareProject,
  remove,
} from '../controllers/UsersHasProjectsController.js';

const UsersHasProjectsRouter = Router();

UsersHasProjectsRouter.post('/', save);
UsersHasProjectsRouter.get('/', getAllByUserId);
UsersHasProjectsRouter.delete('/', remove);
UsersHasProjectsRouter.post('/user/:id', shareProject);
UsersHasProjectsRouter.get('/project/:id', getAllUsersByProjectId);

export default UsersHasProjectsRouter;
