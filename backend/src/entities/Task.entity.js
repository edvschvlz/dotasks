import { EntitySchema } from 'typeorm';

export const TaskEntity = new EntitySchema({
  name: 'task',
  tableName: 'tasks',
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
    deadline: {
      type: 'datetime',
    },
    importance: {
      type: 'enum',
      enum: ["RED", "YELLOW", "GREEN"],
      default: "GREEN",
    },
    columns_id: {
      primary: true,
      type: 'int',
    },
  },
});
