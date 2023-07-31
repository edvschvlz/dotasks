import { EntitySchema } from 'typeorm';

export const UserHasTaskEntity = new EntitySchema({
  name: 'user_has_task',
  tableName: 'users_has_tasks',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    users_id: {
      primary: true,
      type: 'int',
    },
    tasks_id: {
      primary: true,
      type: 'int',
    },
  },
});
