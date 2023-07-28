import { UsersHasProjectsRepository } from '../repositories/UsersHasProjectsRepository.js';

export const getAll = async (request, response) => {
  try {
    const users_has_projects = await UsersHasProjectsRepository.getAll();

    return response.status(200).send(users_has_projects);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const getById = async (request, response) => {
  try {
    const user_has_project = await UsersHasProjectsRepository.getById(request.body.id);

    return response.status(200).send(user_has_project);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const save = async (request, response) => {
  try {
    const { users_id, projects_id, user_permission } = request.body;

    const user_has_project = await UsersHasProjectsRepository.save(users_id, projects_id, user_permission);

    return response.status(201).send(user_has_project);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
