import Image from 'next/image'
import {
  Container,
  MenuItem,
  InfoContainer,
  Links,
} from './styles'

const myLoader = ({ src, width, quality }) => {
  return `https://tiktok-clone-ch9nw.ondigitalocean.app/${src}?w=${width}&q=${quality || 75}`
}

function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <Image loader={myLoader} src='/images/homeIcon.svg' alt="" width={40} height={40} />
        <span>For you</span>
      </MenuItem>
      <MenuItem>
        <Image loader={myLoader} src='/images/peopleIcon.svg' alt="" width={40} height={40} />
        <span>Following</span>
      </MenuItem>
      <InfoContainer>
        <Links margin>
          <a>About</a>
          <a>Newsroom</a>
          <a>Contact</a>
          <a>Careers</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Help</a>
          <a>Safety</a>
        </Links>
        <Links>
          <a>Community Guidelines</a>
          <a>Terms</a>
        </Links>
        <Links margin>
          <a>Privacy</a>
        </Links>
        <Links margin>
          <a>© 2021 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}

export default Sidebar;
