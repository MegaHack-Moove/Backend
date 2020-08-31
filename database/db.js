const Knex = require('knex')

var knex = new Knex(
  {
    client: 'sqlite3',
    connection: {
      host: 'localhost',
      connection: {
        filename: './src/database/dev.sqlite3'
      },
      migrations: {
        directory: './src/database/migrations'
      },
      useNullAsDefault: true,
    },
  })

module.exports = knex