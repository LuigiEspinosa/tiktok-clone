const video = async (req, res) => {
  try {
    const response = await fetch("https://www.tiktok.com/oembed?url=https://www.tiktok.com/@minasbulldog/video/6987766561717243142")
      .then(res => res.json())
    
    return res.status(200).json(response)
  } catch (e) {
    return res.status(404).json({
      error: 'Video not found.',
    })
  }
}

export default video;
