
exports.up = function(knex) {
   return knex.schema.createTable('credit_card_application', table => {
      table.increments();
      table.integer("applicationNumber").notNullable();
      table.string("lastName", 128).notNullable();
      table.string('contactEmail', 128).notNullable();
      table.string("ssn", 128).notNullable().unique();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
   }); 
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('credit_card_application');
};
