import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: calc(0.56 * (400px + ((100vw - 768px) / 1152) * 100));
  margin-right: 1rem;
  margin-top: 15px;
`;

export const VideoContainer = styled.div`
`;

export const Video = styled.video`
  max-width: 100%;
  border-radius: 9px;
`;
