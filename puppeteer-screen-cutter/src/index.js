const puppeteer = require('puppeteer');
const Tesseract = require('tesseract.js')
const fs = require('fs');

const waitFor = (delay) => {
  return new Promise(resolve => setTimeout(resolve, delay));
}
// const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

const openVideo = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-fullscreen']
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({ width: 1366, height: 768 });
  page.on('console', msg => console.log(msg.text()));
  // const recorder = new PuppeteerScreenRecorder(page);
  await page.evaluate(() => {
    document.querySelector('.ytp-play-button').click();
    document.querySelector('.ytp-fullscreen-button').click();
  });
  const videoLen = await page.evaluate(`document.querySelector('.ytp-progress-bar').getAttribute('aria-valuemax')`)
  // await recorder.start('sample.mp4');
  const timeEnd = new Date() + videoLen * 1000
  const freq = 10

  while (1) {
    const path = `./screenshots/${new Date()}.png`
    await page.screenshot({ path });
    const { data: { text } } = await Tesseract.recognize(
      path,
      'chi_sim',
    )
    await fs.appendFileSync('text.txt', text)
    await waitFor(freq)
    if (new Date() > timeEnd) {
      await browser.close()
    }
  }
}

openVideo('https://www.youtube.com/watch?v=2ldjw03uj2c')