const { getById, filterBy } = require('../models/usersModel');

function validateLogin(req, res, next) {
   const { email, password } = req.body;

   if(!email || !password) {
      res.status(400).json({ errorMessage: "Enter require fields" });
   } else {
      next();
   }
};

async function validateId(req, res, next) {
   const { id } = req.params;

   try {
      const user = await getById(id);
      if(user.length)  {
         next();
      } else {
         res.status(404).json({ errorMessage: 'Invalid ID' });
      }      
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
}

async function checkIfEmailExist(req, res, next) {
   const { email } = req.body;

   try {
      const user = await filterBy({ email });

      console.log('what is this? ', user);
      if(user.length) {
         res.status(400).json({ errorMessage: "Email already exist, please try another one" });
      } else {
         next();
      }
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
}

module.exports = {
   validateLogin,
   validateId,
   checkIfEmailExist
}