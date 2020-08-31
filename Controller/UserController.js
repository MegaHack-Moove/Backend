exports.up = (knex, Promise) => {
    return knex.schema
    .hasTable('user', (exists) => {
            knex.schema.createTable('user', (table) => {
                table.increments('id')
                table.string('firstname').notNullable()
                table.string('lastname').notNullable()
                table.string('email').notNullable()
                table.string('password').notNullable()
            })
            .then(() => {
                console.log('>> User table created successfully.')
            })
            .catch(() => {
                console.log('>> An error occur while creating table User.')
            })
    })
};
exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user');
};