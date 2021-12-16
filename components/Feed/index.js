import dynamic from 'next/dynamic'
import { Container } from './styles'
const PostCard = dynamic(() => import('../PostCard'))

function Feed({ posts }) {
  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={index} post={post}></PostCard>
      ))}
    </Container>
  )
}

export default Feed;
