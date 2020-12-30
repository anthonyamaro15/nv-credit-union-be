const express  = require('express');
const cors = require('cors');
const heltmet = require('helmet');

const creditCardApplicationRoute = require('../routes/creditCardApplicationRoute');

const server = express();

server.use(express.json());
server.use(cors());
server.use(heltmet());

server.use("/credit_card_application", creditCardApplicationRoute);

module.exports = server;
