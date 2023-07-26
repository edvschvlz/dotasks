import { Router } from 'express';

import { getAll, save } from '../controllers/ProjectsController.js';

import { Auth } from '../middleware/Auth.js';

const ProjectsRouter = Router();

ProjectsRouter.get('/', Auth, getAll);
ProjectsRouter.post('/', Auth, save);

export default ProjectsRouter;
