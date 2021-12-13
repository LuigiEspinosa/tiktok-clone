import { useEffect, useState } from 'react';
import {
  Container,
  Header,
  PersonContainer,
  Info,
  Author,
  Description,
  Content
} from './styles';

function PostCard({ post }) {
  const [tikTokResults, setTikTokResults] = useState();
  const url = 'https://www.tiktok.com/oembed?url=' + post.videoUrl;

  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setTikTokResults(data);
    });
  }, [url]);

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Info>
            <Author>
              {tikTokResults?.author_name}
            </Author>
            <Description>
              <span>{tikTokResults?.title}</span>
            </Description>
          </Info>
        </PersonContainer>
      </Header>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: tikTokResults?.html || '' }}></div>
      </Content>
    </Container>
  );
}

export default PostCard;
