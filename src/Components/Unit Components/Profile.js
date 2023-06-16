import React, {useState} from 'react'
import { getCookie, setCookie } from '../Unit Components/CookieUtils';
import { useNavigate } from 'react-router-dom';
export default function Profile(props) {
  const navigate=useNavigate()
  if(Object.keys(props.user).length==0){
    // need to check if this works or not
    props.setuser({})
    setCookie('secret', '', { expires: new Date(0) });
    setCookie('email', '', { expires: new Date(0) });
    navigate('/')
  }
  const checkloggedin=async function(){
    var secretcookie=getCookie('secret');
    var emailcookie=getCookie('email');
    const verified=await fetch('http://localhost:8000/app/get_user',{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailid:emailcookie, secret:secretcookie })      
    })
    const responsedatapromise=verified.json()
    responsedatapromise.then((responsedata)=>{
      if(responsedata['success']!="Updated Successfully"){
        props.setuser(undefined)
        setCookie('secret', '', { expires: new Date(0) });
        setCookie('email', '', { expires: new Date(0) });
        navigate('/')      }
    })

  }
  return (
    <>
        <div className='Display_area' style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)', width:'100%', height:'100%', overflowY:'scroll', scrollbarWidth:'none', display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignContent:'center'}} onLoad={checkloggedin}>

        </div>
    </>
  )
}
