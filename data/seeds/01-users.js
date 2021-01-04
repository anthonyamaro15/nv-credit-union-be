const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(async function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
           email: "userone@gmail.com", 
           password: await bcrypt.hash("password", 8) 
        },
        { email: "usertwo@gmail.com", password: 'passtwo' },
      ]);
    });
};
