import useSWR from "swr"
import fetch from "unfetch"

import { Container } from './styles';

const fetcher = async (path) => {
  return await fetch(path).then(res => res.json())
}

const VideoContainer = () => {
  const {data, error} = useSWR('/api/video', fetcher);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: data.html || '' }}></div>
    </Container>
  );
}

export default VideoContainer;
