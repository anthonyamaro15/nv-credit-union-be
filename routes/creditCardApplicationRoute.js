const express = require("express");
const nodemailer = require('nodemailer');
const applicationTemplate = require('../emailTemplates/creditCardApplicationTemplate');
const { gmailUser, gmailPassword } = require('../envVariables');

const route = express.Router();

route.post("/create", async (req, res) => {
   const { applicationNumber, firstName,  contactEmail } = req.body;
   try {
      await followUpEmail({ applicationNumber, firstName,  contactEmail });
      res.status(201).json({ message: "email sent!" });      
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }

});

async function followUpEmail(body) {
   const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
         user: gmailUser,
         pass: gmailPassword
      },
   });

   const info = await transporter.sendMail({
      from: "loans@onenevada.org",
      to: body.contactEmail,
      subject: "Your Loan Application Status",
      html: applicationTemplate(body)
   });

   console.log('message sent: %s', info.messageId);
}

module.exports = route;
