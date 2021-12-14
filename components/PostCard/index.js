import { useRef, useState } from 'react'
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
  ActionsContainer,
  VideoContainer,
  Video,
  PlayerIcon,
  Actions,
  Action,
} from './styles';

const fetcher = async (path) => {
  return await fetch(path).then(res => res.json())
}

const PostCard = () => {
  const [running, setRunning] = useState(false);
  const videoRef = useRef();
  const {data, error} = useSWR('/api/video', fetcher);

  function createTime(date) {
    const dateObj = new Date(date * 1000);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    return `${month}-${day}`
  }

  const toggleAction = () => {
    if (videoRef?.current != null) {
      if (!running) videoRef.current.play();
      else videoRef.current.pause();
      setRunning(!running);
    }
  };
  
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
          <Image src='/images/songIcon.svg' alt="" width={18} height={25} />
          <a>{data?.musicMeta?.musicName} - {data?.musicMeta?.musicAuthor}</a>
        </Song>
        <MediaContainer>
          <VideoContainer>
            <Video
              ref={videoRef}
              webkit-playsinline
              autoplay
              playsinline
              loop
              preload='metadata'
              poster={data?.imageUrl}
              width={data?.videoUrl?.width}
              height={data?.videoUrl?.height}
            >
              <source src={data?.videoUrl} type="video/mp4" />
            </Video>
            <ActionsContainer onClick={toggleAction}>
              <PlayerIcon
                src={running ? '/images/pauseIcon.svg' : '/images/playIcon.svg'}
              ></PlayerIcon>
            </ActionsContainer>
          </VideoContainer>
          <Actions>
            <Action>
              <Image src='/images/heartIcon.svg' alt="" width={32} height={32} />
              <a>{data?.diggCount}</a>
            </Action>
            <Action>
              <Image src='/images/bubbleIcon.svg' alt="" width={32} height={32} />
              <a>{data?.commentCount}</a>
            </Action>
            <Action>
              <Image src='/images/arrowIcon.svg' alt="" width={32} height={32} />
              <a>{data?.shareCount}</a>
            </Action>
          </Actions>
          </MediaContainer>
      </Content>
    </Container>
  );
}

export default PostCard;
