const knex = require("knex");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const db = knex({
  client: "pg",
  // connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: true,
  // },

  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "test",
    database: "smart-brain",
  },
});

module.exports = db;
