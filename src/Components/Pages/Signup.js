import React, { useState } from 'react';
import { getCookie, setCookie } from '../Unit Components/CookieUtils';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setname] = useState('');
  const [org, setorg] = useState('');
  const [passw, setPassw] = useState('');

  const handleSignup = async function (event) {
    event.preventDefault();
    var input = document.querySelector('input[type="file"]')
    const formData = new FormData();
  formData.append('User_email', email);
  formData.append('User_name', name);
  formData.append('User_org', org);
  formData.append('password', passw);
  formData.append('upload_image', input.files[0]);

  const response = await fetch('http://localhost:8000/signup/add', {
    method: 'POST',
    body: formData,
  });

    var final_response_data;
    const responsedatapromise=response.json()
    responsedatapromise.then((responsedata)=>{
        console.log(responsedata)
        navigate('/login')
    })    
  };

  return (
    <>
      <div
        className="Display_area"
        style={{
          backgroundColor: 'rgb(36,82,122)',
          color: 'rgb(93,172,189)',
          width: '100%',
          height: '100%',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div style={{ width: '50%', justifyContent: 'center', display: 'flex', textAlign: 'center' }}>
          <form id="login_form" onSubmit={handleSignup} encType='multipart/form-data'>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="User_name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                name="User_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail3" className="form-label">
                Organisation
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                name="User_org"
                value={org}
                onChange={(e) => setorg(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={passw}
                onChange={(e) => setPassw(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputImage" className="form-label">
                Profile Image
              </label>
              <input
                type="file" name="upload_image" accept=".jpg" required
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{ position: 'relative', left: '30%' }} />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary" id="Submit_Button_Login_form">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
