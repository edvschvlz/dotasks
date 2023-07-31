import { Router } from 'express';

import { getAll, save, getById, getTaskEditors } from '../controllers/TasksController.js';

const TasksRouter = Router();

TasksRouter.get('/', getAll);
TasksRouter.post('/', save);
TasksRouter.get('/:id', getById);
TasksRouter.get('/getTaskEditors/:id', getTaskEditors)

export default TasksRouter;
