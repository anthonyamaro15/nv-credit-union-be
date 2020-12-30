const rounds = Number(process.env.ROUNDS);
const secret_jtw = process.env.SECRET_JWT;
const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_PASS;
const resetPassword = process.env.RESET_PASS;
const sendTo = process.env.SEND_TO;
const clientUrl = process.env.CLIENT_URL;

const sendGridKey = process.env.SENDGRID_KEY;
const sender = process.env.SENDER;

module.exports = {
   rounds,
   secret_jtw,
   gmailUser,
   gmailPassword,
   resetPassword,
   sendTo,
   clientUrl,
   sendGridKey,
   sender
}
