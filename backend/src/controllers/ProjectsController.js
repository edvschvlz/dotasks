import { ProjectsRepository } from '../repositories/ProjectsRepository.js';

export const getAll = async (request, response) => {
  try {
    const projects = await ProjectsRepository.getAll();

    return response.status(200).send(projects);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const save = async (request, response) => {
  try {
    const { name, description } = request.body;

    const project = await ProjectsRepository.save(name, description);

    return response.status(201).send(project);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
