import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blog from './pages/Blog'
function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
    <Routes>
        <Route path="/" element={<Blog />}>
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
