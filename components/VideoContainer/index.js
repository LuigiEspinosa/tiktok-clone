import useSWR from "swr"
import fetch from "unfetch"

import { Container, Video } from './styles';

const fetchVideo = async (path) => {
  return await fetch(path).then(res => res.json())
}

const fetchData = async (path) => {
  return await fetch(path).then(res => res.json())
}

const VideoContainer = () => {
  const {data: source, error: errorSrc} = useSWR('/api/video', fetchVideo);
  const {data: postData, error: errorData} = useSWR('/api/scraper', fetchData);

  if (errorSrc || errorData) {
    return <p>Failed to load</p>;
  }

  if (!source || !postData) {
    return <p>Loading...</p>
  }

  return (
    <Container>
    <Video
      webkit-playsinline
      autoplay
      playsinline
      loop
      preload='metadata'
      poster={postData?.imageUrl}
      width={postData?.videoUrl?.width}
      height={postData?.videoUrl?.height}
    >
      <source src={source.source} type="video/mp4" />
    </Video>
    </Container>
  );
}

export default VideoContainer;
