const knex = require("knex");

const db = knex({
  client: "pg",
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },

  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
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
