const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
const nodemailer = require('nodemailer');
const User = require('./User');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MongoDBConnectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB Connection Error:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});

function generateVerificationCode() {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
app.post('/api/send-verification-email', async (req, res) => {
  var { id } = req.body;
  const verificationCode = generateVerificationCode();

  try {
    // Check if a user with the provided email already exists
    console.log("id",id)
    const existingUser = await User.findOne({ "email": id });
    console.log("existing user:", existingUser)
  
    if (existingUser.isVerified === true){
      await transporter.sendMail({
        from: 'beachevents01@gmail.com',
        to: id,
        subject: 'Email Verification',
        text: `Your verification code is: ${verificationCode}`,
      });
  
      res.status(200).json({ message:  verificationCode});
      return null;
    }
    if (existingUser) {
      return res.status(400).json({ message: `${id} already registered.`});
    }
    else{
      await transporter.sendMail({
        from: 'beachevents01@gmail.com',
        to: id,
        subject: 'Email Verification',
        text: `Your verification code is: ${verificationCode}`,
      });
  
      res.status(200).json({ message:  verificationCode});
    }
  } catch (error) {
    console.error('Sending verification email failed:', error);
    res.status(500).json({ message: 'Sending verification email failed.' });
  }
});

app.post('/api/changePassword', async (req, res) => {
  const { id, password } = req.body;
  
  try {
    // Check if the email matches the required domain
    // console.log(id)
    // console.log(password)
    const user = await User.findOne({ "email": id });
    if (password) {
      user.password = password;
      user.isVerified = true;
      await user.save();
      res.status(200).json({ message: 'Password reset successful.' });
    } else {
      res.status(400).json({ message: 'Password reset unsuccesful' });
    }
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).send({ message: 'Password reset failed.' });
  }
});

app.post('/api/register', async (req, res) => {
  const { id, password} = req.body;
  console.log("Email: ", id)
  console.log("Password: ",  password)

  try {
    // Check if the email is already registered
    const user = await db.collection('users').findOne({ 'email': id });
    console.log("This is the user in DB: ", user)
    if (user) {
      return res.status(400).json({ message: `${id} Already Existes` });
    }
    else {
      const user = new User({
        email: id,
        password: password,
        isVerified: true
      })

      db.collection('users').insertOne(user)
      res.status(200).json({ message: 'Registration successful.' });
    }
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).send({ message: 'Registration failed.' });
  }
});

// New API endpoint for user authentication
app.post('/api/authenticate', async (req, res) => {
  const { id, pass } = req.body;SD
  try {
    const user = await db.collection('users').findOne({ 'email': id });
    if (!user.email){
      return res.status(400).json({ message: 'Email not found Blah Blah.'});
    }
    

    if (!user) {
      return res.status(400).json({ message: 'Email not found.'});
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: 'Email not verified. Please check your email for a verification code.' });
    }

    if (user.password !== pass) {
      return res.status(400).json({ message: 'The entered Password did not match!' });
    } 

    // User authentication successful
    res.status(200).json({ message: 'Authentication successful.' });
  } catch (error) {
    console.log("Did not make User")
    console.error('Authentication failed:', error);
    res.status(500).json({ message: 'Blood' });
  }
});




// FOR HOME
// app.listen(port, '192.168.254.11', () => {
//   console.log(`Server is running on http://192.168.254.11:${port}`);
// });

// FOR SCHOOL


app.listen(port, '172.20.10.3', () => {
  console.log(`Server is running on http://172.20.10.3:${port}`);
});
