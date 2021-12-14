import { useRef, useState } from 'react';
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

function PostCard({ postData }) {
  const [running, setRunning] = useState(false);
  const videoRef = useRef();

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

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={postData?.authorMeta?.avatar}></Avatar>
          <Info>
            <Author>
              {postData?.authorMeta?.name}
              <span>
                {postData?.authorMeta?.nickName} &bull; {createTime(postData?.createTime)}
              </span>
            </Author>
            <Description>
              {postData?.text}
            </Description>
          </Info>
        </PersonContainer>
      </Header>
      <Content>
        <Song>
          <img src='/images/songIcon.svg'></img>
          <a>{postData?.musicMeta?.musicName} - {postData?.musicMeta?.musicAuthor}</a>
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
              poster={postData?.imageUrl}
              width={postData?.videoUrl?.width}
              height={postData?.videoUrl?.height}
            >
              <source src={postData?.videoUrl} type="video/mp4" />
            </Video>
            <ActionsContainer onClick={toggleAction}>
              <PlayerIcon
                src={running ? '/images/pauseIcon.svg' : '/images/playIcon.svg'}
              ></PlayerIcon>
            </ActionsContainer>
          </VideoContainer>
          <Actions>
            <Action>
              <img src='/images/heartIcon.svg'></img>
              <a>{postData?.diggCount}</a>
            </Action>
            <Action>
              <img src='/images/bubbleIcon.svg'></img>
              <a>{postData?.commentCount}</a>
            </Action>
            <Action>
              <img src='/images/arrowIcon.svg'></img>
              <a>{postData?.shareCount}</a>
            </Action>
          </Actions>
          </MediaContainer>
      </Content>
    </Container>
  );
}

export default PostCard;
