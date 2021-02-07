const express = require('express');
const redis = require('redis');
const { makeADecision } = require('../helperFunctions');
const { validatePreapprovalData } = require('../middlewares/validatePreapproval');

const route = express.Router();
const client = redis.createClient(process.env.REDIS_URL);

route.post('/application', validatePreapprovalData, async (req, res) => {
   const { email, ssn, firstName } = req.body;

   // set email as key to make this unique
   client.get(`${email}`, (err, data) => {
      if(err) {
         res.status(500).json({ errorMessage: err });
      }
      
      if(data !== null) {
         // if we have application data, and the data matches with what we have 
         // store in redis, it means client recently submitted a
         // pre approval application, if so send a message
         let applicationData = JSON.parse(data);
         if(
            email === applicationData.email && 
            ssn === applicationData.ssn && 
            firstName === applicationData.firstName
            ) {
            let response = {
               message: 'You recently submitted an approval application',
               firstName: applicationData.firstName,
               approved: applicationData.approved
            }
            res.status(200).json(response);
         }
      } else {
         // added to redis, set expiration time in 1 day
         // add logic to send back a response if client was approved or not
         const result = makeADecision(req.body);
         const updatedData = {
            ...req.body,
            approved: result
         }
         const response = { 
            firstName: updatedData.firstName, 
            approved: updatedData.approved 
         }
         client.setex(`${email}`, 1440, JSON.stringify(updatedData));
         res.status(200).json(response);
      }          
   });
});

module.exports = route;
