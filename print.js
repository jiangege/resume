const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/dist/index.html`, {waitUntil: 'networkidle2'});
  await page.pdf({path: 'dist/resume.pdf', format: 'A4'});

  await browser.close();
})();
