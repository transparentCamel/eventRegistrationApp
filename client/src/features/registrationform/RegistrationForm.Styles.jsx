import styled from 'styled-components';

export const RegistrationFormStyles = styled.div`
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
  p {
    color: red;
  }
  form {
    .inputContainer {
      display: flex;
      flex-direction: column;
      label {
        margin-bottom: 8px;
      }
      input {
        border-radius: 4px;
      }
      input:not(#submit) {
        border: 1px solid #8c8c8c;
        margin-bottom: 16px;
        padding: 16px;
      }
      #submit {
        color: #fffffc;
        border: none;
        background-color: #4267b2;
        margin-top: 16px;
        padding: 8px 0px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .goToTable {
    position: absolute;
    top: 10%;
    left: 80%;
  }
  .logoutBtn {
    position: absolute;
    top: 10%;
    right: 80%;
  }
`;
