import { UsersRepository } from '../repositories/UsersRepository.js';

export const getAll = async (request, response) => {
  try {
    const users = await UsersRepository.getAll();

    return response.status(200).send(users);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

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

    console.log('body', body);

    const user = await UsersRepository.update(user_id, body);

    console.log('user', user);

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
