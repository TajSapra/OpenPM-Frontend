import React, {useState} from 'react'
import { getCookie, setCookie } from '../Unit Components/CookieUtils';
import { useNavigate } from 'react-router-dom';
export default function Header(props) {
  const navigate=useNavigate()
  const handleLogout=async function(){
        setCookie('secret', '', { expires: new Date(0) });
        setCookie('email', '', { expires: new Date(0) });
        props.setuser(undefined)
        navigate('/') 
  }
  return (
    <div style={{width:'100%', height:'14%', display:'flex', backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)', borderBottom:'2px solid'}}>
      <div>
        <a href="/" style={{display:'flex', height:'100%', alignItems:'center'}}>
          <img src={require('../../Assets/Logos/logo_noname.png')} className="d-inline-block align-text-center" alt="" style={{width: "80%",height: "100%"}}/>
          <span style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>
          {props.title}
          </span>       
        </a>
      </div>
      <div style={{display:'flex', alignItems:'center', position:"relative", left:'1%'}}>
        <a className="nav-link active" aria-current="page" href="/" style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>Home</a>
        <a className="nav-link" href="/about" style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>About</a>
        {Object.keys(props.user).length==0&&(<>
         <a className="nav-link" href="/login" style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>Login</a>
         <a className="nav-link" href="/signup" style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>Signup</a>
       </>)}      
       {props.user!=undefined &&Object.keys(props.user).length>0&&(<>
         <a className="nav-link" href="/app/profile" style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>Profile</a>
       </>)}      
      </div>
      <div style={{display:'flex', alignItems:'center', width:'85%', justifyContent:'flex-end'}}>
      {props.user!=undefined&&Object.keys(props.user).length>0&&(<div style={{position:'relative', right:'5%', color:'rgb(93,172,189)'}}>
         <div style={{cursor:'pointer'}} onClick={handleLogout}>
         <i className="fa-solid fa-right-from-bracket fa-xl" style={{color:'#5dacbd'}}></i>
         </div>
     </div>)}
      </div>
    </div>
  )
}
