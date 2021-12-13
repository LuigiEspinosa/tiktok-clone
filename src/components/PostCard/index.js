import dynamic from 'next/dynamic';
import { useState } from 'react';
import { server } from '../../config';
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
  Action,
} from './styles';
const VideoEmbed = dynamic(() => import('../Video'));

function PostCard({ post }) {
  const [postData, setPostData] = useState({})

  fetch(`${server}/api/tiktok`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ TWuser: post.videoUrl }),
  })
    .then((res) => res.json())
    .then((userData) => {
      setPostData(userData)
    })

  function createTime(date) {
    const dateObj = new Date(date * 1000);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    return `${month}-${day}`
  }

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={postData?.video?.authorMeta?.avatar}></Avatar>
          <Info>
            <Author>
              {postData?.video?.authorMeta?.name}
              <span>
                {postData?.video?.authorMeta?.nickName} &bull; {createTime(postData?.video?.createTime)}
              </span>
            </Author>
            <Description>
              {postData?.video?.text}
            </Description>
          </Info>
        </PersonContainer>
      </Header>
      <Content>
        <Song>
          <img src='/images/songIcon.svg'></img>
          <a>{postData?.video?.musicMeta?.musicName} - {postData?.video?.musicMeta?.musicAuthor}</a>
        </Song>
        <MediaContainer>
          <VideoEmbed post={post.videoUrl} />
          <Actions>
            <Action>
              <img src='/images/heartIcon.svg'></img>
              <a>{postData?.video?.diggCount}</a>
            </Action>
            <Action>
              <img src='/images/bubbleIcon.svg'></img>
              <a>{postData?.video?.commentCount}</a>
            </Action>
            <Action>
              <img src='/images/arrowIcon.svg'></img>
              <a>{postData?.video?.shareCount}</a>
            </Action>
          </Actions>
          </MediaContainer>
      </Content>
    </Container>
  );
}

export default PostCard;
