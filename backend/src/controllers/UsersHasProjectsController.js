import { UsersHasProjectsRepository } from '../repositories/UsersHasProjectsRepository.js';

export const getAllByUserId = async (request, response) => {
  try {
    const projects = await UsersHasProjectsRepository.getAllByUserId(request.user.id);

    return response.status(200).send(projects);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const save = async (request, response) => {
  try {
    const { projects_id } = request.body;
    const user_id = request.user.id;

    await UsersHasProjectsRepository.save(user_id, projects_id);

    return response.status(201).send('Created');
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
