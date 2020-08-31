const Knex = require('knex')

var knex = new Knex(
  {
    client: 'sqlite3',
    connection: {
      host: 'localhost',
      connection: {
        filename: './src/database/db.sqlite'
      },
      migrations: {
        directory: './src/database/migrations'
      },
      useNullAsDefault: true,
    },
  })

module.exports = knex