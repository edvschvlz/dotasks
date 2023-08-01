import dataSource from '../database/Connect.js';
import { UserHasProjectEntity } from '../entities/UserHasProject.entity.js';

let usersHasProjectsRepository = dataSource.getRepository(UserHasProjectEntity);

const getAllByUserId = async (id) => {
  const projects = await usersHasProjectsRepository.find({ where: { users_id: id } });

  return projects;
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
