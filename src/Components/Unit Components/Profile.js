import React, { useState, useEffect } from 'react';
import { getCookie, setCookie } from '../Unit Components/CookieUtils';
import { useNavigate } from 'react-router-dom';

export default function Profile(props) {

  return (
    <>
      <div        className='Display_area'        style={{          backgroundColor: 'rgb(36,82,122)',          color: 'rgb(93,172,189)',          width: '100%',          height: '100%',          overflowY: 'scroll',          scrollbarWidth: 'none',          display: 'flex',          flexDirection: 'column',          flexWrap: 'wrap',          justifyContent: 'center',          alignContent: 'center',}}>
        {props.user.mail}
        {Object.keys(props.user).length}
      </div>
    </>
  );
}
