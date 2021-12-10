import styled from 'styled-components';

export const Container = styled.div`
  width: 592px;
  max-width: 592px;
  position: relative;
  padding-bottom: 25px;
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
  margin-bottom: 4rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PersonContainer = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

export const Author = styled.a`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  :hover {
    text-decoration: underline;
  }
  > span {
    margin-top: 1px;
    margin-left: 4px;
    font-weight: 400;
    font-size: 14px;
    color: var(--black);
  }
`;

export const Description = styled.div`
  display: inline;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
