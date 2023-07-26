import { TasksRepository } from '../repositories/TasksRepository.js';

export const getAll = async (request, response) => {
  try {
    const tasks = await TasksRepository.getAll();

    return response.status(200).send(tasks);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const getById = async (request, response) => {
  try {
    const task = await TasksRepository.getById(request.body.id);

    return response.status(200).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const save = async (request, response) => {
  try {
    const { name, description, deadline, importance, columns_id } = request.body;

    const task = await TasksRepository.save(name, description, deadline, importance, columns_id);

    return response.status(201).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
