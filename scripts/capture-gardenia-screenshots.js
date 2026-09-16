const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function captureScreenshots() {
  const outputDir = path.join(__dirname, '..', 'public', 'gardenia');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  console.log('Navigating to Gardenia home page...');
  await page.goto('https://gardenia-five.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // 1. Hero / Main Screenshot
  console.log('Capturing Hero screenshot...');
  await page.screenshot({
    path: path.join(outputDir, 'hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // 2. Full Page or Scroll sections
  console.log('Capturing Full Home Page...');
  await page.screenshot({
    path: path.join(outputDir, 'home-full.png'),
    fullPage: true
  });

  // 3. Navigate or scroll to Custom Bouquet / Shop if buttons exist
  // Let's check for "Customize Yours" or "Build Bouquet" button
  console.log('Looking for Bouquet Builder button...');
  const buildBtn = page.locator('text="Customize Yours"').or(page.locator('text="Build Bouquet"'));
  if (await buildBtn.count() > 0) {
    console.log('Clicking Bouquet Builder...');
    await buildBtn.first().click();
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(outputDir, 'bouquet-builder.png'),
      clip: { x: 0, y: 0, width: 1440, height: 1000 }
    });

    // Check if there is an AI preview button or preview step
    const previewBtn = page.locator('text="Preview"').or(page.locator('text="AI Preview"')).or(page.locator('text="Visualize"'));
    if (await previewBtn.count() > 0) {
      console.log('Clicking Preview button...');
      await previewBtn.first().click();
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: path.join(outputDir, 'preview-modal.png'),
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });
    }
  }

  // 4. Shop / Occasions section
  console.log('Capturing Product Discovery section...');
  await page.goto('https://gardenia-five.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  // Scroll down to products
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(outputDir, 'discovery.png'),
    clip: { x: 0, y: 800, width: 1440, height: 900 }
  });

  // 5. Mobile viewport screenshot
  console.log('Capturing Mobile Viewport screenshot...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('https://gardenia-five.vercel.app/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({
    path: path.join(outputDir, 'mobile-hero.png'),
    fullPage: false
  });

  await browser.close();
  console.log('All screenshots captured successfully!');
}

captureScreenshots().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
