import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  padding-top: 70px;
`;

export const SidebarContainer = styled.aside`
  flex: 0 0 240px;
  @media (max-width: 768px) {
    display: none;
    flex: 0;
  }
`;

export const ContentContainer = styled.section`
  flex: 1;
  margin: 0 auto;
  padding: 50px 20px;
  display: flex;
  max-width: 1194px;
  justify-content: space-around;
`;