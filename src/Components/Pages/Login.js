import React, { useState } from 'react';
import { getCookie, setCookie } from '../Unit Components/CookieUtils';
import { useNavigate } from 'react-router-dom';
export default function Login(props) {
    const navigate=useNavigate()
    const[email,setEmail]=useState(""); 
	const[passw,setPassw]=useState("");
    // const handleInputChange = (event) => {
    //     setFormData({ formData, [event.target.name]: event.target.value });
    // };
    const handleLogin=async function(event){
        event.preventDefault();
        var secretcookie=getCookie('secret');
        const response = await fetch('http://localhost:8000/login/checker', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emailid: email, password: passw, secret:secretcookie }), // Single JSON.stringify
        });
        var final_response_data;
        const responsedatapromise=response.json()
        responsedatapromise.then((responsedata)=>{
            final_response_data=responsedata
            console.log(final_response_data)
            if(final_response_data['success']=="Updated Successfully"&&final_response_data['user']['user_secret']!=undefined&&final_response_data['user']['user_secret']!=null){
                setCookie('secret', final_response_data['user']['user_secret'], { expires: 30 });
                props.setuser(final_response_data.user)
                console.log(props.user, final_response_data.user)
                setCookie('email', email, { expires: 30 })
                navigate('/app/profile');
            }
            else{
                setCookie('secret', '', { expires: new Date(0) });
                setCookie('email', '', { expires: new Date(0) });
                props.setuser(undefined)
            }
        })
    
    }
    return (
    <>
        <div className='Display_area' style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)', width:'100%', height:'100%', overflowY:'scroll', scrollbarWidth:'none', display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignContent:'center'}}>
            <div style={{width:"50%", justifyContent:'center', display:'flex', textAlign:'center'}}>
            <form id='login_form' onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={passw} onChange={(e)=>setPassw(e.target.value)}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{position:'relative', left:'30%'}}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" id='Submit_Button_Login_form'>Submit</button>
            </form>            

            </div>
        </div>
    </>
  )
}
