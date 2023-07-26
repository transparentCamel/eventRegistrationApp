import styled from 'styled-components';

export const EditFormStyles = styled.div`
  background-color: white;
  z-index: 9999;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 40%;
  border-radius: 16px;
  padding: 64px;
  box-shadow: 5px 5px 5px #343434;
  top: 20%;
  border: 1px solid black;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
      border: 1px solid #8c8c8c;
      margin-bottom: 16px;
      padding: 16px;
    }
    button {
      color: #fffffc;
      border: none;
      background-color: #4267b2;
      margin-top: 16px;
      padding: 8px 0px;
      font-size: 20px;
      cursor: pointer;
      border-radius: 6px;
    }
    #cancel {
      background-color: red;
    }
  }
`;
