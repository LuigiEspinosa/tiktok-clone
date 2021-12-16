import styled from 'styled-components'

export const Container = styled.div`
  width: 592px;
  max-width: 592px;
  position: relative;
  padding-bottom: 25px;
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
  margin-bottom: 20px;
`;

export const Content = styled.div`
  margin-left: 68px;
`;

export const Song = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 5px;
  a {
    font-weight: 800;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  img {
    width: 18px;
    height: 25px;
    margin-right: 5px;
  }
`;

export const MediaContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1rem;
`;
