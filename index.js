// const twilio = require('twilio');


// // Your Twilio account SID and auth token
// const accountSid = 'AC75e5d6ba3cfaf8bdc9ef3fe7dd8ad815';
// const authToken = 'd7683c2fc1ab5ed11d9fccd72c341fb0';

// // Create a Twilio client
// const client = twilio(accountSid, authToken);

// // Your Twilio phone number (you can get this from the Twilio console)
// const twilioPhoneNumber = '447893941751';

// // Recipient's phone number
// const recipientPhoneNumber = '9150603025'; // replace with the actual number

// // Message to be sent
// const messageBody = 'Test OTP for STMS project';

// // Send SMS
// client.messages.create({
//     body: messageBody,
//     from: twilioPhoneNumber,
//     to: recipientPhoneNumber
// })
// .then((message) => {
//     console.log(`SMS sent successfully. SID: ${message.sid}`);
// })
// .catch((error) => {
//     console.error(`Error sending SMS: ${error.message}`);
// });


// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC75e5d6ba3cfaf8bdc9ef3fe7dd8ad815";
const authToken = "d7683c2fc1ab5ed11d9fccd72c341fb0";
const verifySid = "VAa116e1869187fa4eb19ff6c0ced6a65a";
const client = require("twilio")(accountSid, authToken);

client.verify.v2
  .services(verifySid)
  .verifications.create({ to: "+919150603025", channel: "sms" })
  .then((verification) => console.log(verification.status))
  .then(() => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Please enter the OTP:", (otpCode) => {
      client.verify.v2
        .services(verifySid)
        .verificationChecks.create({ to: "+919150603025", code: otpCode })
        .then((verification_check) => console.log(verification_check.status))
        .then(() => readline.close());
    });
  });