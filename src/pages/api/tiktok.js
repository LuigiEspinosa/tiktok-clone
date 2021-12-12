const TikTokScraper = require('tiktok-scraper');
const Cors = require('cors')

const cors = Cors({
  methods: ['POST'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async (req, res) => {
  await runMiddleware(req, res, cors)
  if (req.method === 'POST') {
    const username = req.body.TWuser

    try {
      const videoMeta = await TikTokScraper.getVideoMeta(username);
      res.statusCode = 200
      return res.json(videoMeta.collector[0])
    } catch (e) {
      res.statusCode = 404
      return res.json({
        error: 'Video not found.',
      })
    }
  }
}