import express from 'express';
import { addProduct } from '../controllers/adminController.js';
import { protect, admin } from '../middleware/adminauthMiddleware.js';
import multer from 'multer';

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Admin routes
router.post('/add-product', protect, admin, upload.single('image'), addProduct);

export default router;
