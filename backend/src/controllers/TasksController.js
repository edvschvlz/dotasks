import { TasksRepository } from '../repositories/TasksRepository.js';

export const getAll = async (request, response) => {
  try {
    const tasks = await TasksRepository.getAll();

    return response.status(200).send(tasks);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const findOneById = async (request, response) => {
  try {
    const { id } = request.params;
    const task = await TasksRepository.findOneById(id);

    return response.status(200).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const save = async (request, response) => {
  try {
    const { name, importance, columns_id } = request.body;

    const task = await TasksRepository.save(name, importance, columns_id);

    return response.status(201).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const updatePrazo = async (request, response) => {
  try {
    const { id, deadline} = request.body.deadline;

    const task = await TasksRepository.updatePrazo(id, deadline);

    return response.status(201).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};

export const update = async (request, response) => {
  try {
    const { id } = request.params;
    const { importance } = request.body;

    const task = await TasksRepository.update(id, importance);

    return response.status(201).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
  
export const updateAll = async (request, response) => {
  try {
    const taskBody  = request.body;
    console.log("OI")
    console.log(taskBody);//VARIAVEL UNDEFINED
    const task = await TasksRepository.updateAll(taskBody.id, taskBody.importance, taskBody.description, taskBody.deadline, taskBody.name);
    
    
   
    return response.status(201).send(task);
  } catch (err) {
    return response.status(400).send(err.message);
  }
};


export const deleteBy = async (request, response) => {
  try {
    const { id } = request.params;

    await TasksRepository.deleteBy(id);

    return response.status(204).send('Success!');
  } catch (err) {
    return response.status(400).send(err.message);
  }
};
