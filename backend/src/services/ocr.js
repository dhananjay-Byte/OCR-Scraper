const Tesseract = require('tesseract.js');
const fs = require('fs');
const axios = require('axios');

async function downloadImage(url) {
  const path = 'uploads/temp_image.jpg';
  const response = await axios({
    url,
    responseType: 'stream',
  });
  response.data.pipe(fs.createWriteStream(path));
  return new Promise((resolve, reject) => {
    response.data.on('end', () => resolve(path));
    response.data.on('error', reject);
  });
}

async function performOCR(imagePath) {
  const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
  return extractItemsAndPrices(text);
}

function extractItemsAndPrices(text) {
  const lines = text.split('\n');
  const items = lines.map(line => {
    const [item, price] = line.split(' - ');
    return { item, price };
  });
  return items;
}

module.exports = { downloadImage, performOCR };
