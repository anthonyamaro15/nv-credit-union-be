const express = require("express");
const applicationTemplate = require('../emailTemplates/creditCardApplicationTemplate');
const { sendGridKey, sender } = require('../envVariables');
const axios = require('axios');
const sgMail = require('@sendgrid/mail')

const route = express.Router();

route.post("/create", async (req, res) => {
   const { applicationNumber, firstName,  contactEmail } = req.body;
   try {
      
      sendEmail({applicationNumber, firstName,  contactEmail});
      res.status(201).json({ message: "email sent!" });      
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

function sendEmail(body) {
   sgMail.setApiKey(sendGridKey)
   const msg = {
      to: body.contactEmail,
      from: sender, 
      subject: 'Your Loan Application Status',
      text: 'important',
      html: applicationTemplate(body),
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
