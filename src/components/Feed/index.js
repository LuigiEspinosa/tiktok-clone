import dynamic from 'next/dynamic';
import { Container } from './styles';
const PostCard = dynamic(() => import('../PostCard'));

function Feed() {
  return (
    <Container>
      <PostCard></PostCard>
    </Container>
  );
}

export default Feed;
