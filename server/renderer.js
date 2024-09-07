const puppeteer = require('puppeteer')

async function renderSVG(svg, animation) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setContent(`
    <html>
      <body>
        <div id="svg-container">${svg}</div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
        <script>
          ${animation}
        </script>
      </body>
    </html>
  `)

  // Capture frames here

  await browser.close()

  return 'Rendered SVG'
}

module.exports = { renderSVG }
