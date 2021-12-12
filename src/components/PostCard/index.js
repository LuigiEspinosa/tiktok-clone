import React from 'react';
import { server } from '../../pages/config';
import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Song,
  Content,
  VideoContainer,
  Video,
  ActionsContainer,
  PlayerIcon,
  Actions,
  Action,
} from './styles';

function PostCard({ post }) {
  const [postData, setPostData] = React.useState({})

  fetch(`${server}/api/tiktok`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      'referer': postData?.headerMeta?.referer,
      'cookie': postData?.headerMeta?.cookie
    },
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
          <Avatar src={postData?.videoMeta?.authorMeta?.avatar}></Avatar>
          <Info>
            <Author>
              {postData?.videoMeta?.authorMeta?.name}
              <span>
                {postData?.videoMeta?.authorMeta?.nickName} &bull; {createTime(postData?.videoMeta?.createTime)}
              </span>
            </Author>
            <Description>
              {postData?.videoMeta?.text}
            </Description>
          </Info>
        </PersonContainer>
      </Header>
    </Container>
  );
}

export default PostCard;
