import styled from 'styled-components';

export const ButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  img {
    width: 24px;
    height: 24px;
  }
`;
