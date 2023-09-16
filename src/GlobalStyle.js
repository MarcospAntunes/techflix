import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --dark: #1C1B1B;
    --fonte: 'Inter', sans-serif;
    --logoFonte: 'Cairo Play', sans-serif;
    --azulDaLogoEBotao: #223A7A;
    --claro: #fff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

header {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}

nav a {
    color: ${({ theme }) => theme.text};
}

body {
    font-family: var(--fonte);
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
}

input[type='search'] {
    background-color: ${({ theme }) => theme.text};
}

`