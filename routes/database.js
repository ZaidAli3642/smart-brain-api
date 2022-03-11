const knex = require("knex");

const db = knex({
  client: "pg",
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },

  connection: {
    host: "ec2-52-70-186-184.compute-1.amazonaws.com",
    port: 5432,
    user: "vxssppscfhhwro",
    password:
      "f57f5f0c69eb82cf15a4321c0306d01cbb2421c91854a082f9106499d85f5433",
    database: "dehjs18or6gfn1",
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
