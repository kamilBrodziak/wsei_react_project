import {createGlobalStyle} from 'styled-components';
import Colors from './Colors';

const GlobalStyle = createGlobalStyle`
    body {
        background: #f5f7f9;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 10px;
        
    }


`;

export default GlobalStyle;