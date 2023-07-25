import { EntitySchema } from 'typeorm';

export const ProjectEntity = new EntitySchema({
  name: 'project',
  tableName: 'projects',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
      length: 50,
    },
    description: {
      type: 'longtext',
    },
  },
});
