import { UsersHasTasksRepository } from '../repositories/UsersHasTasksRepository.js';

export const getAll = async (request, response) => {
  try {
    const users_has_tasks = await UsersHasTasksRepository.getAll();

    return response.status(200).send(users_has_tasks);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const getById = async (request, response) => {
  try {
    const user_has_task = await UsersHasTasksRepository.getById(request.body.id);

    return response.status(200).send(user_has_task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const save = async (request, response) => {
  try {
    const { users_id, tasks_id } = request.body;

    const user_has_task = await UsersHasTasksRepository.save(users_id, tasks_id);

    return response.status(201).send(user_has_task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
