import { UsersModel } from '../repositories/UsersRepository.js';

export const getAll = async (request, response) => {
  const users = await UsersModel.getAll();

  return response.status(200).send(users);
};

export const register = async (request, response) => {
  try {
    const { email, name, password } = request.body;

    const user = await UsersModel.save(email, name, password);

    delete user.password;

    return response.status(201).send(user);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
