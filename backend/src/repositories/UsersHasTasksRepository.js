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

export const UsersHasTasksRepository = { getAll, save };
