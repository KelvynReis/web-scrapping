const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=dolar&oq=dolar&aqs=chrome..69i57l2j69i61l2j69i60l2j69i61j69i60.501j0j4&sourceid=chrome&ie=UTF-8');
  // await page.screenshot({ path: 'example.png' });

  const result = await page.evaluate(() =>{
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value
    
  })

  console.log(result);

  await browser.close();
})();
