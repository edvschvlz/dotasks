import dataSource from '../database/Connect.js';
import { UserHasProjectEntity } from '../entities/UserHasProject.entity.js';
import { ProjectEntity } from '../entities/Project.entity.js';

let usersHasProjectsRepository = dataSource.getRepository(UserHasProjectEntity);
let projectsRepository = dataSource.getRepository(ProjectEntity);

const getAllByUserId = async (id) => {
  const user_has_projects = await usersHasProjectsRepository.find({ where: { users_id: id } });

  let projects = [];
  for (const project of user_has_projects) {
    projects.push(await projectsRepository.find({ where: { id: project.projects_id } }));
  }

  return projects.flat(1);
};

const save = async (users_id, projects_id) => {
  const user_has_project = await usersHasProjectsRepository.save({
    users_id: users_id,
    projects_id: projects_id,
    user_permission: 'ADMINISTRATOR',
  });

  return user_has_project;
};

export const UsersHasProjectsRepository = { getAllByUserId, save };
