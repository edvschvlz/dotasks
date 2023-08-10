import dataSource from '../database/Connect.js';
import { ActivityEntity } from '../entities/Activity.entity.js';

let activitiesRepository = dataSource.getRepository(ActivityEntity);

const getAll = async () => {
  const projects = await activitiesRepository.find();

  return projects;
};

const save = async (name, description) => {
  const project = await activitiesRepository.save({
    description: description,
    completed: completed,
    task_id: task_id,
  });

  return project;
};

const getById = async (id) => {
  const project = await activitiesRepository.findBy({ id: id });

  return project;
};

const getByTask = async (tasks_id) => {
  const project = await activitiesRepository.findBy({ tasks_id: tasks_id });

  return project;
};

export const ActivitiesRepository = { getAll, save, getById, getByTask };
