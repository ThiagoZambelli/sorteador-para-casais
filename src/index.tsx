import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import 'normalize.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <div>Ola, Mundo</div>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);

