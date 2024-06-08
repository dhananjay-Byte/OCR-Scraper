const { downloadImage, performOCR } = require('./ocr');
const { storeData } = require('../config/database');

const uploadImage = async (req, res) => {
  try {
    const imagePath = req.file.path;
    const data = await performOCR(imagePath);
    await storeData(data);
    res.status(200).json({ message: 'Data extracted and stored successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const processImageUrl = async (req, res) => {
  try {
    const imageUrl = req.body.url;
    const imagePath = await downloadImage(imageUrl);
    const data = await performOCR(imagePath);
    await storeData(data);
    res.status(200).json({ message: 'Data extracted and stored successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadImage, processImageUrl };
