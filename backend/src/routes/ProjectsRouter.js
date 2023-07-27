import { Router } from 'express';

import { getAll, save, findOneBy } from '../controllers/ProjectsController.js';

import { Auth } from '../middleware/Auth.js';

const ProjectsRouter = Router();

ProjectsRouter.get('/', getAll);
ProjectsRouter.post('/', save);
ProjectsRouter.get('/:id', findOneBy);

export default ProjectsRouter;
