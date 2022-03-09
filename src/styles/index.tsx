import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
        /* color */
        --darkGreen: #456132;
        --green: #74BD52;
        --lightGreen: ##B9DEA8;
        --orange: #FFAC30;
        --yellow: #F2F2F2;
        --lightGrey: #F1F3F6;
        --grey: #9A99A2;
        --red: #D63939;
        --line: #E0E0E0;
        --inputBackgroundColor: #F6F6F6;
        --inputBorderColor: #CCCFD3;
        --textColor: #171822;
        --white: #FFFFFF;
        --black: #000000;

        /* font */
        --title: 30px;
        --subtitle: 24px;
        --paragraph: 18px;
        --label: 16px;
        --placeholder: 16px;
        --small: 14px;
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 500;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
`;
