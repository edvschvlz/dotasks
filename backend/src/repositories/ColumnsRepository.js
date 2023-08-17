import dataSource from '../database/Connect.js';
import { ColumnEntity } from '../entities/Column.entity.js';
import { TaskEntity } from '../entities/Task.entity.js';
import { ActivityEntity } from '../entities/Activity.entity.js';

let columnsRepository = dataSource.getRepository(ColumnEntity);
let tasksRepository = dataSource.getRepository(TaskEntity);
let activitiesRepository = dataSource.getRepository(ActivityEntity);

const getAll = async () => {
  const columns = await columnsRepository.find();

  return columns;
};

const getAllTasks = async (id) => {
  console.log('id', id);
  const tasks = await tasksRepository.find();

  const filteredTasks = tasks.filter((task) => task.columns_id === id);

  console.log('filteredTasks', filteredTasks);

  return filteredTasks;
};

const save = async (name, projects_id) => {
  const column = await columnsRepository.save({
    name: name,
    projects_id: projects_id,
  });

  return column;
};

const findOneBy = async (id) => {
  const column = await columnsRepository.findOneBy({ id: id });

  return column;
};

const deleteBy = async (id) => {
  const tasks = await getAllTasks(id);
  for (const element of tasks) {
    const activities = await activitiesRepository.getById(element.id);
    activities.map((ativity) => activitiesRepository.deleteBy(ativity.id));
  }
  await tasksRepository.delete({ columns_id: id });
  await columnsRepository.delete({ id: id });
};

const update = async (id, name) => {
  await columnsRepository.update({ id: id }, { name: name });
};

export const ColumnsRepository = { getAll, save, findOneBy, deleteBy, update };
