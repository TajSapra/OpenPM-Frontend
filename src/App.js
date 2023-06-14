import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import React, {useState} from 'react'
import Header from './Components/Unit Components/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
function App() {
  return (
    <>
      <Header title="OpenPM"/>
      <div id='main_content' style={{height:'86.5vh', overflow: 'scroll'}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>

      </div>
    </>
  );
}

export default App;
