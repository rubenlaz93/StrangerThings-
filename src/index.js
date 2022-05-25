import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import UserPost from './components/UserPost';
import NewPost from './components/NewPost';
import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import "../src/app.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<UserPost formType='login' />} />
        <Route path="/register" element={<UserPost formType='register' />} />
        <Route path="/posts/new" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);