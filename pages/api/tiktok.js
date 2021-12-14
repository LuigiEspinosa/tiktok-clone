const { getVideoMeta } = require('tiktok-scraper');
const Cors = require('cors');

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

const tiktok = async (req, res) => {
  await runMiddleware(req, res, cors)
  const username = req.body

  try {
    const options = {
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4275.176 Safari/537.36",
      "referer": "https://www.tiktok.com/",
      "cookie": "ttwid=1|NCl4ECSctVtaUzYOh_TiaMZdsq_OZ0ZojOr_ETR95VM|1639457644|590f9168b32b069a50d4f6a54a6cc30927b92d2a003628741cd2f3b9c0fdea9e; tt_csrf_token=W-URq0kAX30YmHmRppumUoYS"
    }
    const videoMeta = await getVideoMeta(username, options);
    res.status(200).json(videoMeta.collector[0])
  } catch (error) {
    res.status(404).json({ error: 'Video not found.' })
  }
}

export default tiktok;
