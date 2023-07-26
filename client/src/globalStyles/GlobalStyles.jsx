import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin:0px;
        padding:0px;
        #root {
            position:relative;
            height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
        }
    }
`;
