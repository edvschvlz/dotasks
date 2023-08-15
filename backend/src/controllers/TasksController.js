import { TasksRepository } from '../repositories/TasksRepository.js';

export const getAll = async (request, response) => {
  try {
    const tasks = await TasksRepository.getAll();

    return response.status(200).send(tasks);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const findOneById = async (request, response) => {
  try {
    const { id } = request.params;
    const task = await TasksRepository.findOneById(id);

    return response.status(200).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const getTaskEditors = async (request, response) => {
  try {
    const task_id = await TasksRepository.getById(request.body.id);
    const id_user = await UsersHasTasksRepository.getUserByTask(task_id);
    const users = await UsersRepository.getById(id_user);

    return response.status(200).send(users);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const save = async (request, response) => {
  try {
    const { name, importance, columns_id } = request.body;

    const task = await TasksRepository.save(name, importance, columns_id);

    return response.status(201).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const update = async (request, response) => {
  try {
    const { id } = request.body;

    const task = await TasksRepository.update(id);

    return response.status(201).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
