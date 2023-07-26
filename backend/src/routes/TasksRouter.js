import { Router } from 'express';

import { getAll, save } from '../controllers/TasksController';

const TasksRouter = Router();

TasksRouter.get('/', getAll);
TasksRouter.post('/', save);

export default TasksRouter;
