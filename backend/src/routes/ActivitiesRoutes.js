import { Router } from 'express';

import { getAll, save } from '../controllers/ActivitiesController.js';

const ActivitiesRouter = Router();

ActivitiesRouter.get('/', getAll);
ActivitiesRouter.post('/', save);

export default ActivitiesRouter;
