const express = require('express');
const router = express.Router();
const Igreja = require('../models/igreja');

router.post('/', async (req, res) => {
  try {
    const igreja = await new Igreja(req.body).save();
    res.json({ igreja });
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
});

module.exports = router;