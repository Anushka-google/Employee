const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('response', response => {
    if (!response.ok()) {
      console.log('FAILED REQ:', response.url(), response.status());
    }
  });

  await page.goto('https://employee-1-55hg.onrender.com/', { waitUntil: 'networkidle2' });
  await browser.close();
})();
