import React, { useState, useEffect } from 'react';
import { getCookie, setCookie } from '../Unit Components/CookieUtils';
import { useNavigate } from 'react-router-dom';

export default function Profile(props) {
  const navigate= useNavigate()
  const handleclickgorprojects=async function(event){
    navigate('/app/view_projects')
  }
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
        <div className='profile2'>
          <div className="projects">
            <h1 style={{textAlign:'center'}}>Projects</h1>
            <div style={{display:'flex', height:'83%', width:'100%', justifyContent:'space-evenly'}}>
              <div className='cards_list_empty' style={{border:'1px solid', height:'100%', width:'70%', display:'flex', flexWrap:'wrap', flexDirection:'column', overflowX:'scroll' }}>
                {props.user.projects===undefined||props.user.projects.length===0?<span style={{display:'flex', justifyContent:'center', alignItems:'center', height:'inherit', fontSize:'2rem'}}>No Projects</span>:
                <>
{props.user.projects.map((project)=>(
  <div className="card" key={project.ID} style={{backgroundColor:"rgb(46,92,132)", color:"rgb(93,172,189)"}}>
    <div className="card-body">
      <h5 className="card-title">
        {project.Name}
      </h5>
      <p className="card-text">Created by: {project.Owner}</p>
      <a href={'/app/view_project/'+project.ID} className="btn btn-primary" style={{color:"rgb(46,92,132)", backgroundColor:"rgb(93,172,189)"}}>Go to project</a>
    </div>
  </div>
))}                   
                </>
                }
              </div>
              <div className="create_new_project" style={{fontSize:"1.5rem"}} onClick={handleclickgorprojects}>
                    <i className="fa-solid fa-circle-plus fa-2xl" style={{color:'#5dacbd'}}></i>
                    <br />
                    <p>Create New Project</p>
              </div>              
            </div>
          </div>
          <div className="tasks">
                <h1 style={{textAlign:'center'}}>Tasks Summary</h1>
                <br />
                <div className="data">
                  <div className="completed">
                    {props.user.completed_tasks===undefined?<span>Complete Tasks: None</span>:<span>Complete Tasks: {props.user.completed_tasks.length}</span>}
                  </div>
                  <div className="assigned">
                  {props.user.assigned_tasks===undefined?<span>Assigned Tasks: None</span>:<span>Assigned Tasks: {props.user.assigned_tasks.length}</span>}
                  </div>
                  <div className="see_all">
                    <a href="/app/view_projects" className="">See all <i className="fa-solid fa-arrow-right" style={{color:"#5dacbd"}}></i></a>
                  </div>
                </div>              
          </div>
        </div>
      </div>
    </>
  );
}





