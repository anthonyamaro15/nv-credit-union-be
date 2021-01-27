const express  = require('express');
const cors = require('cors');
const heltmet = require('helmet');

const authUserRoute = require('../routes/authUserRoute');
const userResetPasswordRoute = require('../routes/userResetPasswordRoute');
const creditCardApplicationRoute = require('../routes/creditCardApplicationRoute');


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

module.exports = server;
