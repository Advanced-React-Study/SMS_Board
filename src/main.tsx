import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './theme/GlobalStyle';
import App from './App';
import { RecoilRoot } from 'recoil';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </StrictMode>
);
