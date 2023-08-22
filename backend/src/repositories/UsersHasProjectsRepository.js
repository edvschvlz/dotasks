import dataSource from '../database/Connect.js';
import { UserHasProjectEntity } from '../entities/UserHasProject.entity.js';
import { ProjectEntity } from '../entities/Project.entity.js';
import { UserEntity } from '../entities/User.entity.js';
import { ProjectsRepository } from '../repositories/ProjectsRepository.js';

let usersHasProjectsRepository = dataSource.getRepository(UserHasProjectEntity);
let projectsRepository = dataSource.getRepository(ProjectEntity);
let usersRepository = dataSource.getRepository(UserEntity);

const getAllByUserId = async (id) => {
  const user_has_projects = await usersHasProjectsRepository.find({ where: { users_id: id } });

  let projects = [];
  for (const project of user_has_projects) {
    projects.push(await projectsRepository.find({ id: project.projects_id }));
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

const shareProject = async (id, project_id, permission) => {
  const user_has_project = await usersHasProjectsRepository.save({
    users_id: id,
    projects_id: project_id,
    user_permission: permission,
  });

  return user_has_project;
};

const getAllUsersByProjectId = async (product_id) => {
  const users_in_project = await usersHasProjectsRepository.find({
    where: { projects_id: product_id },
  });

  const project = await projectsRepository.findOneBy({ id: product_id });

  let usersJSON = {
    project_name: project.name,
  };
  let users = [];
  for (const user_in_project of users_in_project) {
    const infos = await usersRepository.findOneBy({ id: user_in_project.users_id });

    users.push({
      name: infos.name,
      email: infos.email,
      permission: user_in_project.user_permission,
    });
  }

  usersJSON['users'] = users;

  return usersJSON;
};

const remove = async (user_id, project_id) => {
  const deleted = await usersHasProjectsRepository.delete({
    users_id: user_id,
    projects_id: project_id,
  });

  if (!deleted.affected) {
    throw new Error('Bad Request!');
  }

  const hasAdmins = await usersHasProjectsRepository.findAndCount({
    where: { user_permission: 'ADMINISTRATOR' },
  });

  if (hasAdmins[1] === 0) {
    await ProjectsRepository.remove(project_id);
    await usersHasProjectsRepository.delete({ projects_id: project_id, user_permission: 'EDITOR' });
  }
};

export const UsersHasProjectsRepository = {
  getAllByUserId,
  save,
  shareProject,
  getAllUsersByProjectId,
  remove,
};
