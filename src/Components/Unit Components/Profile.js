import React, { useState, useEffect } from 'react';
import { getCookie, setCookie } from '../Unit Components/CookieUtils';
import { useNavigate } from 'react-router-dom';

export default function Profile(props) {
  console.log(props.imageSrc)
  return (
    <>
      <div        className='Display_area'        style={{          backgroundColor: 'rgb(36,82,122)',          color: 'rgb(93,172,189)',          width: '100%',          height: '100%',          overflowY: 'scroll',          scrollbarWidth: 'none',          display: 'flex',          flexDirection: 'column',          flexWrap: 'wrap',          justifyContent: 'center',          alignContent: 'space-evenly',}}>
        <div className='profile1'>
          <div className="photo">
            <div className='photoborder'>
                    {props.imageSrc ? (
                <img src={props.imageSrc} alt="Image" style={{height:"100%", width:"100%", borderRadius:'50%'}}/>
              ) : (
                <div>Loading image...</div>
              )}              
            </div>
          </div>
          <div className="details">
            <div className="username">Name: {props.user.username}</div>
            <div className="email">Email id: {props.user.mail}</div>
            <div className="organisation">Organisation: {props.user.organisation}</div>
          </div>
        </div>
        <div className='profile2'></div>
      </div>
    </>
  );
}
