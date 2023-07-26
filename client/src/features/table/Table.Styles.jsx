import styled from 'styled-components';

export const TableStyles = styled.table`
  display: flex;
  flex-direction: column;

  thead {
    display: flex;

    tr {
      display: flex;

      th {
        padding: 16px;
        width: 256px;
        background-color: #343434;
        color: white;
      }
    }
  }
  tbody {
    display: flex;
    flex-direction: column;
    tr:nth-child(2n) {
      background-color: #d3d3d3;
    }
    tr {
      display: flex;

      td {
        display: flex;

        gap: 32px;
        justify-content: center;
        align-items: center;
        padding: 16px;
        width: 256px;
      }
    }
  }
  .goToRegister {
    position: absolute;
    top: 10%;
  }
`;
