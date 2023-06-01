const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configurez le transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'paymybase@gmail.com', // Par exemple, Gmail, Yahoo, etc.
  auth: {
    user: 'paymybase@gmail.com',
    pass: 'Azer123++',
  },
});

exports.sendEmail = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: 'illicolove',
    to: 'developperfullstacksenou@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email from Firebase.',
  };

  return transporter.sendMail(mailOptions)
    .then(() => {
      console.log('Email sent successfully');
      return { message: 'Email sent successfully' };
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      throw new functions.https.HttpsError('internal', 'Error sending email');
    });
});
