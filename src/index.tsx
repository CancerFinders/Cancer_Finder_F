import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MarkdownHub from './routes/MarkdownHub';
import MarkdownService from './routes/MarkdownService';
import Main from './routes/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="markdown" element={<MarkdownHub/>}/>
      <Route path="markdown/:mdType" element={<MarkdownService/>}/>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
