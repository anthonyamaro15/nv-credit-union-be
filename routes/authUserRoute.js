const express = require('express');
const bcrypt = require('bcryptjs');
const { 
   addUser, 
   filterBy, 
   remove, 
   update 
} = require('../models/usersModel');
const { rounds } = require('../envVariables');
const { generateToken, generateAccNumber} = require('../middlewares');

const route = express.Router();

// @POST auth/register
route.post('/register', async (req, res) => {
   const userData = req.body;

   const hashSSN = bcrypt.hashSync(userData.SSNNumber, rounds);
   const hashPassword = bcrypt.hashSync(userData.password, rounds);
   userData.SSNNumber = hashSSN;
   userData.password = hashPassword;
   userData.accountNumber = generateAccNumber();
   userData.pin = 0;

   try {
      await addUser(userData);
      res.status(201).json({ message: "User was created."});
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @POST auth/login
route.post('/login', async (req, res) => {
   const { email, password } = req.body;

   try {
      const [user] = await filterBy({ email });
      if(user && bcrypt.compareSync(password, user.password)) {
         const token = generateToken(user);
         res.status(200).json({ token });
      } else {
         res.status(404).json({ errorMessage: "Invalid email or password" }); 
      }
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @PATCH auth/update/:id
route.patch('/update/:id', async (req, res) => {
   const { id } = req.params;

   try {
      await update(id, req.body);
      res.status(200).json({ message: "User updated"});
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @DELETE auth/remove-account/:id
route.delete('/remove-account/:id', async (req, res) => {
   const { id } = req.params;

   try {
      await remove(id);
      res.json({ message: "User deleted"});
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

module.exports = route;
