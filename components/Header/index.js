import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar,
} from './styles'

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src='/images/logoIcon.svg'></LogoIcon>
          <Logo src='/images/logo.svg'></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src='/images/uploadIcon.svg'></Icon>
          <Avatar>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://avatars.githubusercontent.com/u/27463994?s=400&u=c9f9e4f0eda5c4c5a89228121a2f17f9240f8ea1&v=4" alt="User Avatar" width="40" height="40" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
}

export default Header;
