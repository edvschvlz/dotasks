import dataSource from '../database/Connect.js';
import { TaskEntity } from '../entities/Task.entity.js';
import { ColumnEntity } from '../entities/Column.entity.js';
import { ActivityEntity } from '../entities/Activity.entity.js';

let tasksRepository = dataSource.getRepository(TaskEntity);
let columnsRepository = dataSource.getRepository(ColumnEntity);
let activitiesRepository = dataSource.getRepository(ActivityEntity);

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

const updatePrazo = async (id, deadline) => {
  await tasksRepository.update({ id: id }, { deadline: deadline });
};

const findOneById = async (id) => {
  const tasks = await tasksRepository.findOneBy({ id: id });
  const columns = await columnsRepository.findOneBy({ id: tasks.columns_id });
  const activities = await activitiesRepository.find({ where: { tasks_id: tasks.id } });

  const activitiesJSON = [];
  for (const activity of activities) {
    activitiesJSON.push({
      activity_id: activity.id,
      activity_description: activity.description,
      activity_completed: activity.completed,
    });
  }

  return {
    task_id: tasks.id,
    task_name: tasks.name,
    task_description: tasks.description,
    task_deadline: tasks.deadline,
    task_importance: tasks.importance,
    column_name: columns.name,
    activities: activitiesJSON,
  };
};

const update = async (id, importance) => {
  await tasksRepository.update({ id: id }, { importance: importance });
};

const updateAll = async (id, importance , description, deadline, name) => {
  await tasksRepository.update({ id: id }, { importance: importance }, {description:description}, {deadline:deadline}, {name:name});
};

const deleteBy = async (id) => {
  const activities = await activitiesRepository.getById(element.id);
  for (const element of activities) {
    activities.map((ativity) => activitiesRepository.deleteBy(ativity.id));
  }
  await tasksRepository.delete({ id: id});
};


export const TasksRepository = { getAll, save, findOneById, update, updateAll };
