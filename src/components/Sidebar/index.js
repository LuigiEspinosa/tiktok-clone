import {
  Container,
  MenuItem,
  InfoContainer,
  Links,
} from './styles';

function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <img src='/images/homeIcon.svg' alt=""></img>
        <span>For you</span>
      </MenuItem>
      <MenuItem>
        <img src='/images/peopleIcon.svg' alt=""></img>
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
