import dataSource from '../database/Connect.js';
import { UserEntity } from '../entities/User.entity.js';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';

let usersRepository = dataSource.getRepository(UserEntity);

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

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

  const updated = await usersRepository.update({ id: id }, user);

  if (!updated.affected) {
    throw new Error('Erro ao atualizar usuario!');
  }
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

const sendNewConfirmationCode = async (email) => {
  const user = await findByEmail(email);

  const token = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: user.email,
    subject: 'DoTasks Confirmation Code',
    html: `<h1>Token: ${token}</h1>`,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      return new Error('Erro ao enviar email!');
    }
  });

  await update(user.id, { token: token.toString() });
};

const resetPassword = async (email, newPass) => {
  const user = await findByEmail(email);

  await update(user.id, { password: newPass });
};

const findByEmail = async (email) => {
  const user = await usersRepository.findOneBy({ email: email });

  if (!user) {
    throw new Error('Usuário não encontrado!');
  }

  return user;
};

const verifyConfirmationCode = async (email, token) => {
  const user = await usersRepository.findOneBy({ email: email, token: token });

  if (!user) {
    throw new Error('Usuário com respectivo token não encontrado!');
  }
};

export const UsersRepository = {
  findByEmail,
  save,
  authentication,
  update,
  resetPassword,
  sendNewConfirmationCode,
  verifyConfirmationCode,
};
