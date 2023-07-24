import dataSource from '../database/Connect.js';
import { UserEntity } from '../entities/User.entity.js';
import * as bcrypt from 'bcrypt';

let usersRepository = dataSource.getRepository(UserEntity);

const getAll = async () => {
  const users = await usersRepository.find();

  return users;
};

const save = async (email, name, password) => {
  const user = await usersRepository.save({
    email: email,
    name: name,
    password: await hashPassword(password),
  });

  return user;
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const UsersRepository = { getAll, save };
