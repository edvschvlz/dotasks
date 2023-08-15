import { EntitySchema } from 'typeorm';

export const UserEntity = new EntitySchema({
  name: 'user',
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    email: {
      type: 'varchar',
    },
    name: {
      type: 'varchar',
    },
    password: {
      type: 'varchar',
    },
    token: {
      type: 'varchar',
      length: 6,
      nullable: true,
    },
  },
});
