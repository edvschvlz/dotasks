import { EntitySchema } from 'typeorm';

export const Users_has_ProjectsEntity = new EntitySchema({
  name: 'users_has_projects',
  tableName: 'users_has_projects',
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
    projects_id: {
      type: 'int',
      primary: true,
    },
    user_permission: {
      type: 'enum',
      enum: ['AUTOR', 'ADMINISTRATOR', 'VIEWER'],
      default: 'VIEWER',
    },
  },
});
