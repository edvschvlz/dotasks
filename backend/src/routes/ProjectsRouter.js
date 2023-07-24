import { Router } from 'express';

import { getAll, save } from '../controllers/ProjectsController.js';

const ProjectsRouter = Router();

ProjectsRouter.get('/', getAll);
ProjectsRouter.post('/', save);

export default ProjectsRouter;
