import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"


const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        color:white;
        font-size:14px;
        background-color:black;
    }

`;

export default globalStyles;