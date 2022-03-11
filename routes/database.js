const knex = require("knex");

const db = knex({
  client: "pg",
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },

  // connection: {
  //   host: "127.0.0.1",
  //   port: 5432,
  //   user: "postgres",
  //   password: "test",
  //   database: "smart-brain",
  // },
});

// export const database = {
//   users: [
//     {
//       id: "123",
//       name: "John",
//       email: "john@gmail.com",
//       password: "john123",
//       entries: 0,
//       joined: new Date(),
//     },
//     {
//       id: "456",
//       name: "Smith",
//       email: "smith@gmail.com",
//       password: "smith456",
//       entries: 0,
//       joined: new Date(),
//     },
//   ],
// };

module.exports = db;
