exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
                table.increments('id')
                table.string('firstname').notNullable()
                table.string('lastname').notNullable()
                table.string('email').notNullable()
                table.string('password').notNullable()
            })
};
exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user');
};