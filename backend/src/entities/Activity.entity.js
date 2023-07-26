import { EntitySchema } from 'typeorm';

export const ActivityEntity = new EntitySchema({
  name: 'activity',
  tableName: 'activities',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    description: {
      type: 'varchar',
      length: 255,
    },
    completed: {
      type: 'int',
      default: 0,
    },
    task_id: {
      primary: true,
      type: 'int',
    },
  },
});
