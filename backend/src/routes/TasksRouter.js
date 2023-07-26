import { Router } from 'express';

import { getAll, save, getById } from '../controllers/TasksController.js';

const TasksRouter = Router();

TasksRouter.get('/', getAll);
TasksRouter.post('/', save);
TasksRouter.get('/:id', getById);

export default TasksRouter;
