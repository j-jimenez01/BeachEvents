const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Make the password field optional
  isVerified: { type: Boolean, default: false },
  Subscribed: [],
  Notification: [],

});

const User = mongoose.model('Users', userSchema);

module.exports = User;
