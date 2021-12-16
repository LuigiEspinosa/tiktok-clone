import dynamic from 'next/dynamic'
import { Container } from './styles'
const CardHeader = dynamic(() => import('../CardHeader'))

const PostCard = () => {
  return (
    <Container>
      <CardHeader />

      <video 
        controls
        width="250"
        height="200"
        muted
      >
        <source src="/video-feed/@minasbulldog/video/7036437186018921734" />
      </video>
    </Container>
  )
}

export default PostCard;
