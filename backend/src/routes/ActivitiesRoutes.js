import { Router } from 'express';

import { getAll, save, getByTask, updateCheck} from '../controllers/ActivitiesController.js';

const ActivitiesRouter = Router();

ActivitiesRouter.get('/', getAll);
ActivitiesRouter.post('/', save);
ActivitiesRouter.get('/:id', getByTask);
ActivitiesRouter.put('/:id', updateCheck);
// ActivitiesRouter.delete('/:id', deleteBy);


export default ActivitiesRouter;
