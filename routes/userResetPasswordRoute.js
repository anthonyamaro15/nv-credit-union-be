const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');
const resetPasswordTemplate = require('../emailTemplates/resetPasswordTemplate');
const { filterBy, update } = require('../models/usersModel');
const { 
   resetPassword, 
   sendGridKey, 
   sender, 
   rounds 
} = require('../envVariables');

const route = express.Router();

// @PATCH /auth/forgot-password
route.patch('/forgot-password', async (req, res) => {
   const { email } = req.body;

   if(!email) {
      res.status(400).json({ errorMessage: 'Enter require field' });
   }

   try {
      const [user] = await filterBy({ email });
      if(!user) {
         res.status(404).json({ errorMessage: "Invalid email" })
      } else {
         // if email exist then create a temporary token and
         // store it in the database and send user an email 
         // to reset their password
         const resetLink = jwt.sign({ user: user.email }, resetPassword, { expiresIn: '10m' });
         await update(user.id, { resetLink });
         sendEmail(user, resetLink);
         res.status(200).json({ message: "reset email was sent" });
      }

   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @PATCH /auth/reset-password/:token
route.patch('/reset-password/:token', async (req, res) => {
   const resetLink = req.params.token;
   const newPassword = req.body;

   if(resetLink) {
      jwt.verify(resetLink, resetPassword, (error, decodedToken) => {
         if(error) {
            res.status(401).json({ errorMessage: "Incorrect token or it is expired" });
         }
      })
   }

   try {
      const [user] = await filterBy({ resetLink });
      if(!user) {
         res.status(400).json({ errorMessage: "We could not find a match for this link" });
      }
      // if token matches then hash password befeore saving it
      const hashPassword = bcrypt.hashSync(newPassword.password, rounds);
      newPassword.password = hashPassword;

      // remove reset token before saving
      const updatedCredentials = {
         password: newPassword.password,
         resetLink: null
      }

      await update(user.id, updatedCredentials);
      res.status(200).json({ message: "Password updated" });
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

function sendEmail(user, token) {
   sgMail.setApiKey(sendGridKey)
   const msg = {
      to: user.email,
      from: sender, 
      subject: 'Reset password requested',
      text: 'important',
      html: resetPasswordTemplate(token),
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

module.exports = route;
