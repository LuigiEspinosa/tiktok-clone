import puppeteer from "puppeteer"
import cheerio from "cheerio"

const video = async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        "Referer": "https://www.tiktok.com/",
        "Cookie": "tt_csrf_token=5Mo5Rg88iJslOtqpY73kKZLM; ttwid=1|uiQQTIev8mlMIPC5IWIBK8uKF3SxEy-I7KGqHSG4G0s|1639508432|b62e9425fa2553298b26a6932f39806b652af679e70da6ccab37f233cac0cd00"
    })
    await page.goto("https://www.tiktok.com/@minasbulldog/video/6987766561717243142")

    const pageData = await page.evaluate(() => {
      return {
        html: document.documentElement.innerHTML
      }
    })

    const $ = cheerio.load(pageData.html);
    const element = $(".video-player").attr('src');

    await browser.close()

    return res.status(200).json({
      source: element
    })
  } catch (e) {
    return res.status(404).json({
      error: 'Video not found.',
    })
  }
}

export default video;
