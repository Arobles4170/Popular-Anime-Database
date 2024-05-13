// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalContextProvider } from './context/global';
import GlobalStyle from './GlobalStyle';

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
    </React.StrictMode>,
    root
);
