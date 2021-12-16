import useSWR from "swr"
import axios from "axios"

import {
  Container,
  Video
} from './styles';

const fetcher = async (path) => {
  return await axios.get(path).then(res => res.data)
}

const VideoContainer = () => {
  const {data, error} = useSWR('/api/scraper', fetcher);

  if (error) return <p>Failed to load</p>

  return (
    <Container>
      <Video
        controls
        webkit-playsinline
        playsinline
        loop
        preload='metadata'  
        poster={data?.imageUrl}
        width={data?.videoUrl?.width}
        height={data?.videoUrl?.height}
      >
        <source src="/video-feed/@minasbulldog/video/6987766561717243142" type="video/mp4" />
      </Video>
    </Container>
  )
}

export default VideoContainer;
