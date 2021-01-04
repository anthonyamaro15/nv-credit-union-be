const db = require('../data/configDb');

const addUser = (user) => {
   return db('users').insert(user, 'id');
}

module.exports = {
   addUser
}
