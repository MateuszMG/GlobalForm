import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
        font-family: 'Roboto', 'Arial';
    }

    body{
        background-color: #111;
        color: #eee;
        min-height: 100vh;
    }

    ul,li{
        list-style: none;
    }

    a{
        color:inherit;
        text-decoration: none;
    };
`;
