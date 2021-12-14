import { useState } from 'react'
import { server } from '../../config'

function PostCard({ post }) {
  const [postData, setPostData] = useState({})

  fetch(`${server}/api/tiktok`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(post.videoUrl),
  })
    .then((res) => res.json())
    .then((userData) => {
      setPostData(userData)
    })

  return <h1> { postData?.text } </h1>;
}

export default PostCard;
