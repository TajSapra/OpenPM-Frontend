import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import React, {useState, useEffect} from 'react'
import Header from './Components/Unit Components/Header';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login'
import About from './Components/Pages/About';
import Signup from './Components/Pages/Signup'
import Profile from './Components/Unit Components/Profile';
import Logout from './Components/Pages/Logout';
import { getCookie, setCookie } from '../src/Components/Unit Components/CookieUtils';
import View_Projects from './Components/Pages/View_Projects';
import ViewOneProject from './Components/Pages/ViewOneProject';

function App() {
  const [user, SetUser]=useState({})
  const [imageSrc, setImageSrc] = useState('');
  const navigate=useNavigate()
  if(user==undefined)SetUser({})
  useEffect(() => {
    const checkLoggedIn = async () => {
      const secretCookie = getCookie('secret');
      const emailCookie = getCookie('email');
      if(secretCookie==undefined){
        console.log("Hello")
      } 
      else{
        const verified = await fetch('http://localhost:8000/app/get_user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ emailid: emailCookie, secret: secretCookie }),
        });
        const responsedata = await verified.json();
        if (responsedata['success'] == 'Updated Successfully') {
          await SetUser(responsedata.user)
          const response = await fetch('http://localhost:8000/app/get_pic', {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email:emailCookie})
          });
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setImageSrc(imageUrl);
        }
        else{
          SetUser({});
          setCookie('secret', '', { expires: new Date(0) });
          setCookie('email', '', { expires: new Date(0) });
          if(window.location.href=='http://localhost:3000/login'||window.location.href=='http://localhost:3000/signup'){
  
          }
          else{
            navigate('/');
          }
        }
      }

    };

    checkLoggedIn();
  }, [SetUser, navigate]);  


  return (
      <div style={{height:'99.5vh', display:'flex', width:'100vw', flexDirection:'column'}}>
        <Header title="OpenPM" user={user} setuser={SetUser}/>
        <div id='main_content' style={{height:'86.5%'}}>
          <Routes>
            <Route path="/" element={<Home user={user} setuser={SetUser}/>}></Route>
            <Route path='/about' element={<About user={user} setuser={SetUser}/>}></Route>
            <Route path="/login" element={<Login user={user} setuser={SetUser} path="/login"/>}></Route>
            <Route path="/signup" element={<Signup user={user} setuser={SetUser} path="/signup"/>}></Route>
            <Route path='/app/profile' element={<Profile user={user} setuser={SetUser} imageSrc={imageSrc}/>}></Route>
            <Route path='/app/view_projects' element={<View_Projects user={user}/>}></Route>
            <Route path='/app/view_project/:id' element={<ViewOneProject />}></Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;


{/*  */}