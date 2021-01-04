
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('credit_card_application').del()
    .then(function () {
      // Inserts seed entries
      return knex('credit_card_application').insert([
        {
           applicationNumber: 123456, 
           lastName: "smith", 
           contactEmail: 'smith@gmail.com', 
           ssn: 1234567 
        },
        {
           applicationNumber: 6757657, 
           lastName: "test application", 
           contactEmail: 'test@gmail.com', 
           ssn: 164445546
        },
      ]);
    });
};
