const db = require('../data/configDb');

const getById = (id) => {
   return db("credit_card_application as c")
      .where({ id })
      .select('c.applicationNumber', "c.contactEmail", "c.createdAt");
}

const getBy = (filter) => {
   return db('credit_card_application as c')
      .where(filter)
      .select('c.applicationNumber', "c.contactEmail", "c.createdAt");
}

const create = (application) => {
   return db("credit_card_application").insert(application, 'id');
}

module.exports = {
   getById,
   getBy,
   create
}
