import dynamic from 'next/dynamic';
import { Container } from './styles';
const PostCard = dynamic(() => import('../PostCard'));

function Feed({ posts }) {
  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard postData={post} key={index}></PostCard>
      ))}
    </Container>
  );
}

export default Feed;
