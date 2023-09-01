import { UsersRepository } from '../repositories/UsersRepository.js';

export const register = async (request, response) => {
  try {
    const { email, name, password } = request.body;

    const user = await UsersRepository.save(email, name, password);

    delete user.password;

    return response.status(201).send(user);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const update = async (request, response) => {
  try {
    const body = request.body;
    const user_id = request.user.id;

    const user = await UsersRepository.update(user_id, body);

    return response.status(200).send(user);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const authentication = async (request, response) => {
  try {
    const { email, password } = request.body;

    const access = await UsersRepository.authentication(email, password);

    return response.status(200).send(access);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const findByEmail = async (request, response) => {
  try {
    const { email } = request.params;

    const user = await UsersRepository.findByEmail(email);

    delete user.password;

    return response.status(200).send(user);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const sendNewConfirmationCode = async (request, response) => {
  try {
    const { email } = request.params;

    await UsersRepository.sendNewConfirmationCode(email);

    return response.status(201).send();
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const verifyConfirmationCode = async (request, response) => {
  try {
    const { email, token } = request.params;

    await UsersRepository.verifyConfirmationCode(email, token);

    return response.status(200).send();
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const resetPassword = async (request, response) => {
  try {
    const { email, password } = request.body;

    await UsersRepository.resetPassword(email, password);

    return response.status(200).send();
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
