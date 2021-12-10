import dynamic from 'next/dynamic';
import useInView from 'react-cool-inview';
import { Container } from './styles';
const PostCard = dynamic(() => import('../PostCard'));

function Feed({ posts }) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });

  return (
    <Container>
      {posts.map((post, index) => (
        <div className={`observe${index}`} ref={observe} key={index}>
          { inView && <PostCard post={post}></PostCard> }
        </div>
      ))}
    </Container>
  );
}

export default Feed;
