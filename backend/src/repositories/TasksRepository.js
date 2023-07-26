import dataSource from '../database/Connect.js';
import { TaskEntity } from '../entities/Task.entity.js';

let tasksRepository = dataSource.getRepository(TaskEntity);

const getAll = async () => {
  const tasks = await tasksRepository.find();

  return tasks;
};

const save = async (name, description) => {
  const task = await tasksRepository.save({
    name: name,
    description: description,
    deadline: deadline,
    importance: importance,
    columns_id: columns_id,
  });

  return task;
};

export const TasksRepository = { getAll, save };
