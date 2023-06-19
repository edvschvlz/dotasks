import dataSource from '../database/Connect.js';
import { UserEntity } from '../entities/User.entity.js';

let usersRepository = dataSource.getRepository(UserEntity);

const getAll = async () => {
  const users = await usersRepository.find();

  return users;
};

// const save = async (email, name, password) => {
//   const id = uuid();

//   function save() {
//     return new Promise((resolve, reject) => {
//       connection.query(
//         'INSERT INTO users (id, email, name, password) VALUES (?,?,?,?)',
//         [id, email, name, password],
//         (err, rows) => {
//           if (err) reject(err);
//           resolve(rows);
//         },
//       );
//     });
//   }

//   const user = await save();

//   connection.end();

//   return JSON.parse(JSON.stringify(user));
// };

export const UsersModel = { getAll };
