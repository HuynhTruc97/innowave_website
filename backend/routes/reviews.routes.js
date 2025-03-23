const express = require('express');
const router = express.Router(); // <-- Thêm dòng này
const Review = require('../models/Review'); // <-- Import model Review
router.get('/product/:product_id', async (req, res) => {
  try {
    const productId = parseInt(req.params.product_id);
    
    if (isNaN(productId)) {
      return res.status(400).json({
        success: false,
        error: "Invalid product ID format"
      });
    }

    const reviews = await Review.find({ product_id: productId })
      .select('-__v -_id')
      .sort({ date_created: -1 })
      .lean();

    res.json({
      success: true,
      count: reviews.length,
      reviews: reviews
    });

  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({
      success: false,
      error: "Internal server error"
    });
  }
});

module.exports = router; 