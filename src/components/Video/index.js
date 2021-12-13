import { useEffect, useState } from 'react';
import { VideoContainer } from './styles';
import useScript from '../../hooks/useScript';

function VideoEmbed({ post }) {
  useScript('https://www.tiktok.com/embed.js');

  const [tikTokResults, setTikTokResults] = useState();
  const url = 'https://www.tiktok.com/oembed?url=' + post;

  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setTikTokResults(data);
    });
  }, [url]);

  return (
    <VideoContainer>
      <div dangerouslySetInnerHTML={{ __html: tikTokResults?.html || '' }}></div>
    </VideoContainer>
  );
}

export default VideoEmbed;
