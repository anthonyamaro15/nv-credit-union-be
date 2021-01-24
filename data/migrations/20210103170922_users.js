exports.up = function(knex) {
   return knex.schema.createTable('users', table => {
      table.increments();
      table.string('firstName',128).notNullable();
      table.string('middleName',128);
      table.string('lastName');
      table.string('SSNNumber',128).notNullable().unique();
      table.string('dateOfBirth',128).notNullable();
      table.string('gender',128).notNullable();
      table.string("email", 128).notNullable().unique();
      table.string('password',128).notNullable();
      table.string('addressLineOne', 128).notNullable();
      table.string('addressLineTwo', 128);
      table.string('aparmentNumber', 128);
      table.string("city", 128).notNullable();
      table.string('state', 128).notNullable();
      table.integer('zip').notNullable();
      table.string('country', 128).notNullable();
      table.string('citizenshipType', 128).notNullable();
      table.string('primaryPhone', 128).notNullable();
      table.string('cellPhone', 128).notNullable();
      table.string('workPhone', 128);
      table.string('driverLicenseNumber', 128).notNullable();
      table.string('licenseState', 128).notNullable();
      table.string('dateIssued', 128).notNullable();
      table.string('expirationDate', 128).notNullable();
      table.string('employerName', 128).notNullable();
      table.string('occupation', 128).notNullable();
      table.string('accountNumber', 128).notNullable();
      table.integer('pin');
      table.string('resetLink', 255);
      table.timestamp("createdAt").defaultTo(knex.fn.now());
   });
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('users');
};
