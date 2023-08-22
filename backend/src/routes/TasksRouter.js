import { Router } from 'express';
import {
  getAll,
  save,
  findOneById,
  updateAll,
  update,
  updatePrazo,
} from '../controllers/TasksController.js';

const TasksRouter = Router();

TasksRouter.get('/', getAll);
TasksRouter.post('/', save);
TasksRouter.put('/:id', updatePrazo);
TasksRouter.get('/:id', findOneById);
TasksRouter.put('/updateAll/:id', updateAll);
TasksRouter.put('/:id', update);

export default TasksRouter;
