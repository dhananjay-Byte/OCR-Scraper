const puppeteer = require('puppeteer');

async function scrapeImages(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const imageUrls = await page.evaluate(() =>
    Array.from(document.images, img => img.src)
  );

  await browser.close();
  return imageUrls;
}

module.exports = { scrapeImages };
