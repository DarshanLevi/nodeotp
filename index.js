const twilio = require('twilio');

// Your Twilio account SID and auth token
const accountSid = 'AC1e2faad462cc303ee2f45c4ea2f824ca';
const authToken = '64f23aa289da32b980eae7ec17047d52';

// Create a Twilio client
const client = twilio(accountSid, authToken);

// Your Twilio phone number (you can get this from the Twilio console)
const twilioPhoneNumber = '9150603025';

// Recipient's phone number
const recipientPhoneNumber = '7010014753'; // replace with the actual number

// Message to be sent
const messageBody = 'Test OTP for STMS project';

// Send SMS
client.messages.create({
    body: messageBody,
    from: twilioPhoneNumber,
    to: recipientPhoneNumber
})
.then((message) => {
    console.log(`SMS sent successfully. SID: ${message.sid}`);
})
.catch((error) => {
    console.error(`Error sending SMS: ${error.message}`);
});
