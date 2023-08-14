import dataSource from '../database/Connect.js';
import { TaskEntity } from '../entities/Task.entity.js';

let tasksRepository = dataSource.getRepository(TaskEntity);

const getAll = async () => {
  const tasks = await tasksRepository.find();

  return tasks;
};

const save = async (name, importance, columns_id) => {
  const task = await tasksRepository.save({
    name: name,
    importance: importance,
    columns_id: columns_id,
  });

  return task;
};

const getById = async (id) => {
  const task = await tasksRepository.findBy({ id: id });

  return task;
};

export const TasksRepository = { getAll, save, getById };
