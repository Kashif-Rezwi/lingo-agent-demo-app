const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2
  });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/Users/kashifrezwi/.gemini/antigravity/brain/f56ef2e1-bcdc-41ed-8d69-b843a866f930/quantumpages_mobile_view.png', fullPage: true });
  await browser.close();
})();
