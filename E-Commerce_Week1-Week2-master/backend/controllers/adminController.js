import Product from '../models/productModel.js';
import path from 'path';
import fs from 'fs';

// @desc    Add a new product
// @route   POST /api/admin/add-product
// @access  Private (Admin only)
export const addProduct = async (req, res) => {
  try {
    const { name, price, date, description } = req.body;

    if (!name || !price || !date || !description || !req.file) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Save product details to the database
    const product = new Product({
      name,
      price,
      date,
      description,
      image: req.file.path, // Save file path
    });

    await product.save();

    res.status(201).json({ message: 'Product added successfully!' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
