import { Router } from 'express';

import { getAll, save } from '../controllers/TasksController.js';

const TasksRouter = Router();

TasksRouter.get('/', getAll);
TasksRouter.post('/', save);

export default TasksRouter;
