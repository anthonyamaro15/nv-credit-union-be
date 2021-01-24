const db = require('../data/configDb');

const addUser = (user) => {
   return db('users').insert(user, 'id');
}

const getById = (id) => {
   return db('users').where({ id });
}

const filterBy = (filter) => {
   return db("users").where(filter);
}

const update = (id, body) => {
   return db('users').where({ id }).update(body);
}

const remove = (id) => {
   return db("users").where({ id }).del();
}
module.exports = {
   addUser,
   getById,
   filterBy,
   update,
   remove
}
