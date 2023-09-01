import dataSource from '../database/Connect.js';
import { ProjectEntity } from '../entities/Project.entity.js';
import { ColumnEntity } from '../entities/Column.entity.js';
import { TaskEntity } from '../entities/Task.entity.js';
import { ActivityEntity } from '../entities/Activity.entity.js';

let projectsRepository = dataSource.getRepository(ProjectEntity);
let columnsRepository = dataSource.getRepository(ColumnEntity);
let tasksRepository = dataSource.getRepository(TaskEntity);
let activitiesRepository = dataSource.getRepository(ActivityEntity);

const getAll = async () => {
  const projects = await projectsRepository.find();

  return projects;
};

const save = async (name, description) => {
  const project = await projectsRepository.save({
    name: name,
    description: description,
  });

  return project;
};

const remove = async (id) => {
  return await projectsRepository.delete({ id: id });
};

const findOneBy = async (id) => {
  const project = await projectsRepository.findOneBy({ id: id });
  const columns = await columnsRepository.find({ where: { projects_id: project.id } });

  const columnsJSON = [];
  for (const column of columns) {
    const tasks = await tasksRepository.find({ where: { columns_id: column.id } });
    const tasksJSON = [];
    for (const task of tasks) {
      const activities = await activitiesRepository.find({ where: { tasks_id: task.id } });
      const activitiesJSON = [];
      for (const activity of activities) {
        activitiesJSON.push({
          activity_id: activity.id,
          activity_description: activity.description,
          activity_completed: activity.completed,
        });
      }
      tasksJSON.push({
        task_id: task.id,
        task_name: task.name,
        task_description: task.description,
        task_deadline: task.deadline,
        task_importance: task.importance,
        activities: activitiesJSON,
      });
    }
    columnsJSON.push({
      column_id: column.id,
      column_name: column.name,
      tasks: tasksJSON,
    });
  }

  return {
    project_id: project.id,
    project_name: project.name,
    project_description: project.description,
    columns: columnsJSON,
  };
};

export const ProjectsRepository = { getAll, save, findOneBy, remove };
