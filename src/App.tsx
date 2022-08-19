import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Home } from './pages/home/Home';
import { SaveArticle } from './pages/article/SaveArticle';
import { Profile } from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="write-posts" element={<SaveArticle/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
