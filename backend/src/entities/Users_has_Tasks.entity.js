import { EntitySchema } from 'typeorm';

export const Users_has_TasksEntity = new EntitySchema({
  name: 'users_has_tasks',
  tableName: 'users_has_tasks',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    users_id: {
      type: 'int',
      primary: true,
    },
    tasks_id: {
      type: 'int',
      primary: true,
    },
  },
});
