import dataSource from '../database/Connect.js';
import { ActivityEntity } from '../entities/Activity.entity.js';

let activitiesRepository = dataSource.getRepository(ActivityEntity);

const getAll = async () => {
  const tasks = await activitiesRepository.find();

  return tasks;
};

const save = async (name, description) => {
  const task = await activitiesRepository.save({
    description: description,
    completed: completed,
    task_id: task_id,
  });

  return task;
};

export const ActivitiesRepository = { getAll, save };
