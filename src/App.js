import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";
import React, {useState} from 'react'
import Header from './Components/Unit Components/Header';
import Home from './Components/Pages/Home';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
