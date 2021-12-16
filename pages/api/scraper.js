import { getVideoMeta } from 'tiktok-scraper'

const meta = {
  'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)',
  'Referer': 'https://www.tiktok.com/',
  'Cookie': 'tt_webid_v2=BOB'
}
const headers = new Headers(meta)

const url = 'https://www.tiktok.com/@minasbulldog/video/6987766561717243142'

const scraper = async (req, res) => {
  try {
    const videoMeta = await getVideoMeta(url, headers)
    return res.status(200).json(videoMeta.collector[0])
  } catch (e) {
    return res.status(404).json({
      error: 'Video not found.'
    })
  }
}

export default scraper;
