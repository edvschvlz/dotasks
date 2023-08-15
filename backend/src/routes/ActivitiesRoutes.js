import { Router } from 'express';

import { getAll, save, getByTask } from '../controllers/ActivitiesController.js';

const ActivitiesRouter = Router();

ActivitiesRouter.get('/', getAll);
ActivitiesRouter.post('/', save);
ActivitiesRouter.get('/:id', getByTask);
// ActivitiesRouter.delete('/:id', deleteBy);

export default ActivitiesRouter;
