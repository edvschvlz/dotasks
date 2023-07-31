import dataSource from '../database/Connect.js';
import { UserHasProjectEntity } from '../entities/UserHasProject.entity.js';

let usersHasProjectsRepository = dataSource.getRepository(UserHasProjectEntity);

const getAll = async () => {
  const users_has_projects = await usersHasProjectsRepository.find();

  return users_has_projects;
};

const save = async (users_id, projects_id, user_permission ) => {
  const user_has_project = await usersHasProjectsRepository.save({
    users_id: users_id,
    projects_id: projects_id,
    user_permission: user_permission
  });

  return user_has_project;
};

export const UsersHasProjectsRepository = { getAll, save };
