import dynamic from 'next/dynamic'
import useSWR from "swr"
import axios from "axios"
import Image from 'next/image'
import { 
  Container,
  Content,
  Song,
  MediaContainer
} from './styles'
const CardHeader = dynamic(() => import('../CardHeader'))
const Social = dynamic(() => import('../Social'))
const VideoContainer = dynamic(() => import('../VideoContainer'))

const fetcher = async (path) => {
  return await axios.get(path).then(res => res.data)
}

const myLoader = ({ src, width, quality }) => {
  return `https://tiktok-clone-ch9nw.ondigitalocean.app/${src}?w=${width}&q=${quality || 75}`
}

const PostCard = () => {
  const {data, error} = useSWR('/api/scraper', fetcher);

  if (error) return <p> Failed to load </p>

  return (
    <Container>
      <CardHeader />
      <Content>
        <Song>
          <Image loader={myLoader} src='/images/songIcon.svg' alt="" width={18} height={25} />
          <a>{data?.musicMeta?.musicName} - {data?.musicMeta?.musicAuthor}</a>
        </Song>
        <MediaContainer>
          <VideoContainer />
          <Social />
        </MediaContainer>
      </Content>
    </Container>
  )
}

export default PostCard;
