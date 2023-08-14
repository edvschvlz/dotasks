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
  };

  return {
    task_id: tasks.id,
    task_name: tasks.name,
    task_description: tasks.description,
    task_deadline: tasks.deadline,
    task_importance: tasks.importance,
    column_name:  columns.name,
    activities: activitiesJSON,
  };
};

export const TasksRepository = { getAll, save, findOneById };
