import { EntitySchema } from 'typeorm';

export const UserHasProjectEntity = new EntitySchema({
  name: 'user_has_project',
  tableName: 'users_has_projects',
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
    projects_id: {
      primary: true,
      type: 'int',
    },
    user_permission: {
      type: 'enum',
      enum: ['ADMINISTRATOR', 'EDITOR'],
      default: 'EDITOR',
    },
  },
});
