import useSWR from "swr"
import axios from "axios"

import {
  Container,
  Video
} from './styles';

const fetcher = async (path) => {
  return await axios.get(path).then(res => res.data)
}

const VideoContainer = ({ video }) => {
  const {data, error} = useSWR('/api/scraper', fetcher);

  if (error) return <p>Failed to load</p>

  function formater(url) {
    return url.replace('https://www.tiktok.com', '/video-feed');
  }

  // poster={data?.imageUrl}

  return (
    <Container>
      <Video
        controls
        webkit-playsinline
        playsinline
        loop
        preload='metadata'
        width={data?.videoUrl?.width}
        height={data?.videoUrl?.height}
      >
        <source src={formater(video.videoUrl)} type="video/mp4" />
      </Video>
    </Container>
  )
}

export default VideoContainer;
