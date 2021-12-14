import useSWR from "swr"
import fetch from "unfetch"
import Image from 'next/image'

import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Content,
  Song,
  MediaContainer,
  Actions,
  Action
} from './styles';
import VideoContainer from '../VideoContainer'

const fetcher = async (path) => {
  return await fetch(path).then(res => res.json())
}

const myLoader = ({ src, width, quality }) => {
  return `https://tiktok-clone-ch9nw.ondigitalocean.app//${src}?w=${width}&q=${quality || 75}`
}

const PostCard = () => {
  const {data, error} = useSWR('/api/scraper', fetcher);

  function createTime(date) {
    const dateObj = new Date(date * 1000);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    return `${month}-${day}`
  }
  
  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={data?.authorMeta?.avatar}></Avatar>
          <Info>
            <Author>
              {data?.authorMeta?.name}
              <span>
                {data?.authorMeta?.nickName} &bull; {createTime(data?.createTime)}
              </span>
            </Author>
            <Description>
              {data?.text}
            </Description>
          </Info>
        </PersonContainer>
      </Header>
      <Content>
        <Song>
          <Image loader={myLoader} src='/images/songIcon.svg' alt="" width={18} height={25} />
          <a>{data?.musicMeta?.musicName} - {data?.musicMeta?.musicAuthor}</a>
        </Song>
        <MediaContainer>
          <VideoContainer />
          <Actions>
            <Action>
              <Image loader={myLoader} src='/images/heartIcon.svg' alt="" width={32} height={32} />
              <a>{data?.diggCount}</a>
            </Action>
            <Action>
              <Image loader={myLoader} src='/images/bubbleIcon.svg' alt="" width={32} height={32} />
              <a>{data?.commentCount}</a>
            </Action>
            <Action>
              <Image loader={myLoader} src='/images/arrowIcon.svg' alt="" width={32} height={32} />
              <a>{data?.shareCount}</a>
            </Action>
          </Actions>
          </MediaContainer>
      </Content>
    </Container>
  );
}

export default PostCard;
