import { getVideoMeta } from "tiktok-scraper"

const video = async (req, res) => {
  try {
    const response = await getVideoMeta('https://www.tiktok.com/@minasbulldog/video/6987766561717243142')
    const videoMeta = await getVideoMeta('https://www.tiktok.com/@minasbulldog/video/6987766561717243142', response.headers)
    return res.status(200).json(videoMeta.collector[0])
  } catch (e) {
    return res.status(404).json({
      error: 'Video not found.',
    })
  }
}

export default video;