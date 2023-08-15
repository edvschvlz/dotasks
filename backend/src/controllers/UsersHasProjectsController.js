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

export const shareProject = async (request, response) => {
  try {
    const { project_id, permission } = request.body;
    const { id } = request.params;

    await UsersHasProjectsRepository.shareProject(id, project_id, permission);

    return response.status(200).send('OK');
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const getAllUsersByProjectId = async (request, response) => {
  try {
    const { id } = request.params;

    const users = await UsersHasProjectsRepository.getAllUsersByProjectId(id);

    return response.status(200).send(users);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const remove = async (request, response) => {
  try {
    const { project_id, user_id } = request.query;

    await UsersHasProjectsRepository.remove(user_id, project_id);

    return response.status(204).send();
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
