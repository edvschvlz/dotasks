import { ActivitiesRepository } from '../repositories/ActivitiesRepository.js';

export const getAll = async (request, response) => {
  try {
    const activity = await ActivitiesRepository.getAll();

    return response.status(200).send(tasks);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const save = async (request, response) => {
  try {
    const { description, completed, task_id} = request.body;
    const activity = await ActivitiesRepository.save( description, completed, task_id);

    return response.status(201).send(activity);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const getById = async (request, response) => {
  try {
    const activity = await ActivitiesRepository.getById(request.body.id);

    return response.status(200).send(activity);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const getByTask = async (request, response) => {
  try {
    const activity = await ActivitiesRepository.getByTask(request.body.id);

    return response.status(200).send(activity);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};