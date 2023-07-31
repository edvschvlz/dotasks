import dataSource from '../database/Connect.js';
import { UserHasTaskEntity } from '../entities/UserHasTask.entity.js';

let usersHasTasksRepository = dataSource.getRepository(UserHasTaskEntity);

const getAll = async () => {
  const users_has_tasks = await usersHasTasksRepository.find();

  return users_has_tasks;
};

const save = async (users_id, tasks_id) => {
  const user_has_task = await usersHasTasksRepository.save({
    users_id: users_id,
    tasks_id: tasks_id
  });

  return user_has_task;
};

const getUserByTask = async (tasks_id) => {
  const id_user = await usersHasTasksRepository.findBy({ tasks_id: tasks_id });

  return id_user.users_id;
};

export const UsersHasTasksRepository = { getAll, save, getUserByTask };
