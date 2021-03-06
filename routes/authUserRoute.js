const express = require('express');
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');
const { rounds, sender, sendGridKey } = require('../envVariables');
const newUserTemplate = require('../emailTemplates/newUserTemplate');
const { generateToken, generateAccNumber } = require('../middlewares');
const { 
   addUser, 
   filterBy, 
   remove, 
   update,
   getUserDataById
} = require('../models/usersModel');
const { 
   validateId, 
   validateLogin, 
   checkIfEmailExist 
} = require('../middlewares/validateUser');

const route = express.Router();

//@GET auth/get-user/:id
route.get('/user/:id', validateId, async (req, res) => {
   const { id } = req.params;

   try {
      const [user] = await getUserDataById(id);
      const updatedData = {
         ...user, 
         accountNumber : hashAccuntNumber(user.accountNumber),
         email: user.email.toUpperCase(),
         addressLineOne: user.addressLineOne.toUpperCase(),
         addressLineTwo: user.addressLineTwo.toUpperCase(),
         state: user.state.toUpperCase(),
         city: user.city.toUpperCase()
      }
      res.status(200).json(updatedData);
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @POST auth/register
route.post('/register', checkIfEmailExist, async (req, res) => {
   const userData = req.body;

   const hashSSN = bcrypt.hashSync(userData.SSNNumber, rounds);
   const hashPassword = bcrypt.hashSync(userData.password, rounds);
   userData.SSNNumber = hashSSN;
   userData.password = hashPassword;
   userData.accountNumber = generateAccNumber();
   userData.routingNumber = generateAccNumber();
   userData.pin = 0;

   try {
      await addUser(userData);
      sendEmail(userData);
      res.status(201).json({ message: "User was created."});
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});


// @POST auth/login
route.post('/login', validateLogin, async (req, res) => {
   const { email, password } = req.body;

   try {
      const [user] = await filterBy({ email });

      if(user && bcrypt.compareSync(password, user.password)) {
         const token = generateToken(user);
         res.status(200).json({ token, id: user.id });
      } else {
         res.status(404).json({ errorMessage: "Invalid email or password" }); 
      }
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @PATCH auth/update/:id
route.patch('/update/:id', validateId, async (req, res) => {
   const { id } = req.params;
   const changes = req.body;

   try {
      if(changes.email) {
         res.status(400).json({ errorMessage: "Not allow to change email at this time"});
      } else if(changes.password) {
         const hashPassword = bcrypt.hashSync(changes.password, rounds);
         changes.password = hashPassword;
         await update(id, changes);
         res.status(200).json({ message: "Password updated" });
      } else {
         await update(id, req.body);
         res.status(200).json({ message: "User updated" });
      }
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @DELETE auth/remove-account/:id
route.delete('/remove-account/:id', validateId, async (req, res) => {
   const { id } = req.params;

   try {
      await remove(id);
      res.json({ message: "User deleted"});
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});


function sendEmail(body) {
   sgMail.setApiKey(sendGridKey)
   const msg = {
      to: body.email,
      from: sender, 
      subject: 'About your new account',
      text: 'important',
      html: newUserTemplate(body),
   }
   sgMail
      .send(msg)
      .then(() => {
         console.log('Email sent')
   })
      .catch((error) => {
         console.error(error)
   })
}

function hashAccuntNumber(accountNumber) {
   const hashValue = "****" + String(accountNumber).slice(6);
   return hashValue;
}

module.exports = route;
