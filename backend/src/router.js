import { Router } from 'express';

import UsersRouter from './routes/UsersRouter.js';
import ProjectsRouter from './routes/ProjectsRouter.js';
import TasksRouter from './routes/TasksRouter.js';
import ColumnsRouter from './routes/ColumnsRouter.js';
import UsersHasProjectsRouter from './routes/UsersHasProjectsRouter.js';
import { Auth } from './middleware/Auth.js';

const routes = Router();

routes.use('/users', UsersRouter);
routes.use('/projects', Auth, ProjectsRouter);
routes.use('/columns', Auth, ColumnsRouter);
routes.use('/tasks', Auth, TasksRouter);
routes.use('/users_has_projects', Auth, UsersHasProjectsRouter);

export default routes;
