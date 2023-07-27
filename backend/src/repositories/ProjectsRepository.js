import dataSource from '../database/Connect.js';
import { ProjectEntity } from '../entities/Project.entity.js';

let projectsRepository = dataSource.getRepository(ProjectEntity);

const getAll = async () => {
  const projects = await projectsRepository.find();

  return projects;
};

const save = async (name, description) => {
  const project = await projectsRepository.save({
    name: name,
    description: description,
    deadline: deadline,
  });

  return project;
};

const findOneBy = async (id) => {
  const project = await projectsRepository.findOneBy({ id: id });

  return project;
};

export const ProjectsRepository = { getAll, save, findOneBy };
