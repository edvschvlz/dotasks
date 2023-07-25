import { Router } from 'express';

import UsersRouter from './routes/UsersRouter.js';
import ProjectsRouter from './routes/ProjectsRouter.js';

const routes = Router();

routes.use('/users', UsersRouter);
routes.use('/projects', ProjectsRouter);

export default routes;
