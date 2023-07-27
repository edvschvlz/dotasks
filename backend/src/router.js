import { Router } from 'express';

import UsersRouter from './routes/UsersRouter.js';
import ProjectsRouter from './routes/ProjectsRouter.js';
import TasksRouter from './routes/TasksRouter.js';
import ColumnsRouter from './routes/ColumnsRouter.js';

const routes = Router();

routes.use('/users', UsersRouter);
routes.use('/projects', ProjectsRouter);
routes.use('/columns', ColumnsRouter);
routes.use('/tasks', TasksRouter);

export default routes;
