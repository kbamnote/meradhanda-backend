const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST: Create a new booking
router.post('/', async (req, res) => {
  try {
    const { fullName, phoneNumber, companyName, industryType, businessSize, languagePreference, monthlySales } = req.body;
    
    const newBooking = new Booking({
      fullName,
      phoneNumber,
      companyName,
      industryType,
      businessSize,
      languagePreference,
      monthlySales
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Error saving booking', error: error.message });
  }
});

// GET: Fetch all bookings (for admin panel)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
});

module.exports = router;
