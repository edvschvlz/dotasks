import dataSource from '../database/Connect.js';
import { UserEntity } from '../entities/User.entity.js';
import jwt from 'jsonwebtoken';
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

const update = async (id, user) => {
  if (user.password) {
    user.password = await hashPassword(user.password);
  }

  await usersRepository.update({ id: id }, user);
};

const authentication = async (email, password) => {
  const user = await usersRepository.findOne({ where: { email: email } });

  if (!user) {
    throw new Error('Usuário não existe!');
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new Error('Credenciais incorretas!');
  }

  const payload = { name: user.name, id: user.id, email: user.email };

  const access_token = jwt.sign(payload, 'dotasks');

  return { auth: true, access_token: access_token };
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const getById = async (id) => {
  const user = await usersRepository.findBy({ id: id });

  return user;
};

export const UsersRepository = { getAll, save, authentication, update };
