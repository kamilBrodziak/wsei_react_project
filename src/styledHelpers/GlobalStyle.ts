import {createGlobalStyle} from 'styled-components';
import Colors from './Colors';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;
    }
    
    body {
        background: #f5f7f9;
        font-size: 1.6rem;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
    }


`;

export default GlobalStyle;