import { Router } from 'express';
import { getAll, save, findOneById, getTaskEditors } from '../controllers/TasksController.js';

const TasksRouter = Router();

TasksRouter.get('/', getAll);
TasksRouter.post('/', save);
TasksRouter.get('/:id', findOneById);
TasksRouter.get('/getTaskEditors/:id', getTaskEditors);

export default TasksRouter;
