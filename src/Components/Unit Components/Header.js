import React from 'react'
export default function Header(props) {
  return (
    <div style={{height:'13.5vh'}}>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)', borderBottom:'1px solid rgb(93,172,189)'}}>
     <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src={require('../../Assets/Logos/logo_noname.png')} className="d-inline-block align-text-center" alt="" width="100" height="100"/>
      <span style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>
      {props.title}
      </span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>About</a>
            </li>      
            <li className="nav-item">
              <a className="nav-link" href="/login" style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>Login</a>
            </li>      
            <li className="nav-item">
              <a className="nav-link" href="/signup" style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)'}}>Signup</a>
            </li>      
          </ul>
          <div className='login_box'>
          

          </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
