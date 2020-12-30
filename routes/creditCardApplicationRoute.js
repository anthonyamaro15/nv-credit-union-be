const express = require("express");
const applicationTemplate = require('../emailTemplates/creditCardApplicationTemplate');
const { sendGridKey, sender } = require('../envVariables');
const axios = require('axios');

const route = express.Router();

route.post("/create", async (req, res) => {
   const { applicationNumber, firstName,  contactEmail } = req.body;
   try {
      callMethod({applicationNumber, firstName,  contactEmail})
      res.status(201).json({ message: "email sent!" });      
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

const obj = {
  subject: "Your Loan Application Status",
  heading: "Welcome to my Page",
  description: "here is an example of the data im gonna be sending to you",
};


const callMethod = (body) => {
   axios({
      method: 'POST',
      url: 'https://api.sendgrid.com/v3/mail/send',
      headers: {
         'content-type': 'application/json',
         Authorization: sendGridKey
      },
      data: {
         personalizations: [
            {
               to: [
                  {
                     email: body.contactEmail,
                     name: body.firstName
                  },
               ],
               subject: obj.subject
            },
         ],
         from: {
            email: sender,
            name: "loans@onenevada.org"
         },
         content: [
            {
               type: 'text/html',
               value: applicationTemplate(body)
            }
         ]
      }
   })
   .then((res) => {
      console.log(res.status);
   })
   .catch((error) => {
      console.log( error.response);
   })
};

module.exports = route;
