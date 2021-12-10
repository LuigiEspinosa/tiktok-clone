import styled from 'styled-components';

export const Container = styled.div`
  width: 20%;
  margin-left: 24px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const IconsContainer = styled.div`
  margin-bottom: 39px;
  text-align: left;
`;

export const Icon = styled.img`
  width: 31px;
  height: 31px;
  margin-right: 15px;
`;

export const DownloadImage = styled.img`
  width: 170px;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 12px;
`;
