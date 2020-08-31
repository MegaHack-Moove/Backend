exports.up = (knex, Promise) => {
    return knex.schema
    .hasTable('user', (exists) => {
            knex.schema.createTable('user',function (table){
                table.increments('id')
                table.string('firstname').notNullable()
                table.string('lastname').notNullable()
                table.string('email').notNullable()
                table.string('password').notNullable()
            })
    })
};
exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user');
};