const express = require('express');
const router = express.Router();
const { uploadImage, processImageUrl } = require('../services/imageProcessor');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors'); // Import the CORS middleware

// Use CORS middleware
router.use(cors());

router.post('/upload', upload.single('menuImage'), uploadImage);
router.post('/url', processImageUrl);

module.exports = router;
