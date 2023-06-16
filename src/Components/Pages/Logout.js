import React, {useState} from 'react'
import { setCookie, getCookie } from '../Unit Components/CookieUtils'
import { useNavigate } from 'react-router-dom'

export default function Logout(props) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const navigate=useNavigate();
        setImageLoaded(true);
        console.log("Here")
        props.setuser(undefined)
        setCookie('email', '', {})
        setCookie('secret', '', { expires: new Date(0) });
        setCookie('email', '', { expires: new Date(0) });
        navigate('/')            
  return (
    <img src='../../Assets/Logos/facebook_cover_photo_1.png'>
    </img>
  )
}
