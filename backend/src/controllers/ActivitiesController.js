import { ActivitiesRepository } from '../repositories/ActivitiesRepository';

export const getAll = async (request, response) => {
  try {
    const tasks = await ActivitiesRepository.getAll();

    return response.status(200).send(tasks);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const save = async (request, response) => {
  try {
    const { description, completed, task_id} = request.body;

    const task = await ActivitiesRepository.save( description, completed, task_id);

    return response.status(201).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};