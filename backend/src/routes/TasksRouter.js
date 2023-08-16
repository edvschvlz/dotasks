import { Router } from 'express';
import {
  getAll,
  save,
  findOneById,
  getTaskEditors,
  update,
} from '../controllers/TasksController.js';

const TasksRouter = Router();

TasksRouter.get('/', getAll);
TasksRouter.post('/', save);
TasksRouter.get('/:id', findOneById);
TasksRouter.get('/getTaskEditors/:id', getTaskEditors);
TasksRouter.put('/:id', update);

export default TasksRouter;
