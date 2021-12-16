import {
  Container,
  IconsContainer,
  Icon,
  DownloadImage,
} from './styles'

function Suggestions() {
  return (
    <Container>
      <IconsContainer>
        <Icon src='/images/facebookIcon.svg'></Icon>
        <Icon src='/images/pinterestIcon.svg'></Icon>
        <Icon src='/images/twitterIcon.svg'></Icon>
      </IconsContainer>

      <DownloadImage src='/images/appstore.png'></DownloadImage>
      <DownloadImage src='/images/playstore.png'></DownloadImage>
      <DownloadImage src='/images/amazon.png'></DownloadImage>
    </Container>
  );
}

export default Suggestions;
