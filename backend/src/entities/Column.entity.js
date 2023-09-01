import { EntitySchema } from 'typeorm';

export const ColumnEntity = new EntitySchema({
  name: 'column',
  tableName: 'columns',
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
    projects_id: {
      type: 'int',
      primary: true,
    },
  },
});
