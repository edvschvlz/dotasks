import { Router } from 'express';

import {
  register,
  authentication,
  update,
  findByEmail,
  sendNewConfirmationCode,
  resetPassword,
  verifyConfirmationCode,
} from '../controllers/UsersController.js';

import { Auth } from '../middleware/Auth.js';

const UsersRouter = Router();

UsersRouter.post('/sendConfirmationCode/:email', sendNewConfirmationCode);
UsersRouter.get('/verifyConfirmationCode/', verifyConfirmationCode);
UsersRouter.put('/resetPassword', resetPassword);
UsersRouter.get('/:email', findByEmail);
UsersRouter.post('/', register);
UsersRouter.post('/auth', authentication);
UsersRouter.put('/', Auth, update);

export default UsersRouter;
