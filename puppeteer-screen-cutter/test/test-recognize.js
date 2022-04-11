const Tesseract = require('tesseract.js')

Tesseract.recognize(
  './test/test4.png',
  'chi_sim',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})