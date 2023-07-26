import styled from 'styled-components';

export const LoginStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #343434;
  border-radius: 16px;
  padding: 64px;
  box-shadow: 5px 5px 5px #343434;
  h1 {
    margin-bottom: 32px;
    margin-top: 0px;
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 8px;
    }
    input {
      border-radius: 4px;
      border: 1px solid #8c8c8c;
      margin-bottom: 16px;
      padding: 16px;
    }
  }
  button {
    width: 100%;
    color: #fffffc;
    border: none;
    background-color: #4267b2;
    margin-top: 16px;
    padding: 8px 0px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 6px;
  }
`;
