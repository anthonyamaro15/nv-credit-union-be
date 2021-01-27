const db = require('../data/configDb');

const getAll = () => {
   return db('users');
}

const addUser = (user) => {
   return db('users').insert(user, 'id');
}

const getById = (id) => {
   return db('users').where({ id });
}

const getUserDataById = (id) => {
   return db("users as u").where({ id })
   .select("u.firstName", "u.lastName", "u.middleName",
   "u.lastName", "u.email", "u.addressLineOne", "u.addressLineTwo",
   "u.aparmentNumber", "u.city", "u.state", "u.zip",
   "u.accountNumber", "u.routingNumber");
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
   getUserDataById,
   filterBy,
   update,
   remove,
   getAll
}
