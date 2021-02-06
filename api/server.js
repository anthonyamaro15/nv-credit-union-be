const express  = require('express');
const cors = require('cors');
const heltmet = require('helmet');

const authUserRoute = require('../routes/authUserRoute');
const userResetPasswordRoute = require('../routes/userResetPasswordRoute');
const creditCardApplicationRoute = require('../routes/creditCardApplicationRoute');
const preApprovalRoutes = require('../routes/preApprovalRoutes');


const server = express();

server.use(express.json());
server.use(cors());
server.use(heltmet());

server.get("/", (req, res) => {
   res.status(200).json({ message: "heroku is awake!" });
});

server.use('/auth', authUserRoute);
server.use('/auth', userResetPasswordRoute);
server.use("/credit_card_application", creditCardApplicationRoute);
server.use('/preapproval', preApprovalRoutes);

module.exports = server;
