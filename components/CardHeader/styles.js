import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const PersonContainer = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  display: flex;
  justify-content: space-between;
  height: 56px;
  width: 56px;
  border-radius: 50%;
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