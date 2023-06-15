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
import Login from './Components/Pages/Login'
import About from './Components/Pages/About';
import Signup from './Components/Pages/Signup'
import Profile from './Components/Unit Components/Profile';
function App() {
  const [user, SetUser]=useState({})
  return (
    <>
      <Header title="OpenPM" user={user} setuser={SetUser}/>
      <div id='main_content' style={{height:'86.5vh', overflow: 'scroll'}}>
        <Routes>
          <Route path="/" element={<Home user={user} setuser={SetUser}/>}></Route>
          <Route path='/about' element={<About user={user} setuser={SetUser}/>}></Route>
          <Route path="/login" element={<Login user={user} setuser={SetUser}/>}></Route>
          <Route path="/signup" element={<Signup user={user} setuser={SetUser}/>}></Route>
          <Route path='/app/profile' element={<Profile user={user} setuser={SetUser}/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
