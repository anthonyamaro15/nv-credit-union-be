const jwt = require('jsonwebtoken');
const { secret_jtw } = require('../envVariables');

function generateToken(user) {
   const payload = {
      user: user.email,
      dof: user.dateOfBirth
   };
   const options = {
      expiresIn: "1h"
   }
   return jwt.sign(payload, secret_jtw, options);
}

function generateAccNumber() {
   return Math.floor(Math.random() * 999999999) + 1;
}

module.exports = {
   generateToken,
   generateAccNumber
}
