const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  industryType: {
    type: String,
    required: true,
  },
  businessSize: {
    type: String,
    required: true,
  },
  languagePreference: {
    type: String,
    required: true,
  },
  monthlySales: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
