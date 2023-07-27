import dataSource from '../database/Connect.js';
import { ColumnEntity } from '../entities/Column.entity.js';

let columnsRepository = dataSource.getRepository(ColumnEntity);

const getAll = async () => {
  const columns = await columnsRepository.find();

  return columns;
};

const save = async (name, projects_id) => {
  const column = await columnsRepository.save({
    name: name,
    projects_id: projects_id,
  });

  return column;
};

const findOneBy = async (id) => {
  const column = await columnsRepository.findOneBy({ id: id });

  return column;
};

const deleteBy = async (id) => {
  return await columnsRepository.delete({ id: id });
};

export const ColumnsRepository = { getAll, save, findOneBy, deleteBy };
