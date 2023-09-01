import { ColumnsRepository } from '../repositories/ColumnsRepository.js';

export const getAll = async (request, response) => {
  try {
    const columns = await ColumnsRepository.getAll();

    return response.status(200).send(columns);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const save = async (request, response) => {
  try {
    const { name, projects_id } = request.body;

    const column = await ColumnsRepository.save(name, projects_id);

    return response.status(201).send(column);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const findOneBy = async (request, response) => {
  try {
    const { id } = request.params;

    const column = await ColumnsRepository.findOneBy(id);

    return response.status(200).send(column);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const deleteBy = async (request, response) => {
  try {
    const { id } = request.params;

    await ColumnsRepository.deleteBy(id);

    return response.status(204).send('Success!');
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const update = async (request, response) => {
  try {
    const { id } = request.params;
    const { name } = request.body;

    const column = await ColumnsRepository.update(id, name);

    return response.status(201).send(column);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
