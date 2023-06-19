import { Router } from 'express';

import UsersRouter from './routes/UsersRouter.js';

const routes = Router();

routes.use('/users', UsersRouter);

export default routes;
