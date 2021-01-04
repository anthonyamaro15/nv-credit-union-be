
exports.up = function(knex) {
   return knex.schema.createTable('users', table => {
      table.increments();
      table.string("email", 128).notNullable().unique();
      table.string('password',128).notNullable();
      table.timestamp("createdAt").defaultTo(knex.fn.now());
   });
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('users');
};
