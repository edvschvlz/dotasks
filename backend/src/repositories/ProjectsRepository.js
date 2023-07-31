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
  });

  return project;
};

const findOneBy = async (id) => {
  const project = await projectsRepository.query(`SELECT * FROM dotasksdev.projects p 
  INNER JOIN dotasksdev.columns c ON c.projects_id = p.id
  LEFT JOIN dotasksdev.tasks t ON t.columns_id = c.id
  LEFT JOIN dotasksdev.activities a ON a.tasks_id = t.id
  WHERE p.id = ${id}`);

  return project;
};

export const ProjectsRepository = { getAll, save, findOneBy };
