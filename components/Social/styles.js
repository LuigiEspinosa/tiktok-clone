import styled from 'styled-components'

export const Actions = styled.div`
  padding: 0 10px;
  margin-top: 24px;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    margin-right: 4px;
  }
`;