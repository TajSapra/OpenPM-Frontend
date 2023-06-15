import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Profile(props) {
  const navigate=useNavigate()
  const checkloggedin=async function(){
    if(props.user==undefined){
      // need to check if this works or not
      navigate('/logout')      
    }
  }
  return (
    <>
        <div className='Display_area' style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)', width:'100%', height:'100%', overflowY:'scroll', scrollbarWidth:'none', display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignContent:'center'}} onLoad={checkloggedin}>

        </div>
    </>
  )
}
