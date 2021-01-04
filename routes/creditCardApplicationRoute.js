const express = require("express");
const applicationTemplate = require('../emailTemplates/creditCardApplicationTemplate');
const { sendGridKey, sender } = require('../envVariables');
const sgMail = require('@sendgrid/mail');
const { create, getBy } = require('../models/creditCardApplication');

const route = express.Router();

route.post("/create", async (req, res) => {
   const { applicationNumber, lastName,  contactEmail, ssn } = req.body;
   const savedValues = { applicationNumber, lastName,  contactEmail, ssn };
   try {
      await create(savedValues);
      sendEmail(savedValues);
      res.status(201).json({ message: "submitted application successfully." });      
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});


route.post("/status", async (req, res) => {
   const { lastName, contactEmail, ssn } = req.body;

   try {
      const [ byLastName ] = await getBy({ lastName });
      const [ byEmail ] = await getBy({ contactEmail });
      const [ bySSN ] = await getBy({ ssn });

      if(byLastName && byEmail && bySSN) {
         res.status(200).json(bySSN);
      } else {
         res.status(404).json({ errorMessage: "Unable to find application" });
      }
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
})

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
