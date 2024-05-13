// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    body {
        color: #2c3e50; /* Updated text color */
        font-size: 1.6rem; /* Increased font size */
        background-color: #f5f5f5; /* Updated background color */
        &::-webkit-scrollbar {
            width: 8px; /* Increased scrollbar width */
        }
        &::-webkit-scrollbar-thumb {
            background-color: #27ae60; /* Updated scrollbar thumb color */
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
            background-color: #dcdde1; /* Updated scrollbar track color */
        }
    }
`;

export default GlobalStyle;
