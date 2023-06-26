import React, { useState, useEffect } from 'react';
import CreateNewForm from '../Unit Components/CreateNewForm'
import { getCookie, setCookie } from '../Unit Components/CookieUtils';
import { useNavigate } from 'react-router-dom';

export default function Profile(props) {
  const [addState, changeAddState]=useState(0)
  const [selectedProject, changeSelectedProject]=useState('')
  const [projectdetails, changeprojectdetails]=useState({})
  const handeaddproject1=async function(){
    changeAddState(1-addState)
  }
  const handlegetprojectdetails = function(e) {
    changeSelectedProject(e.target.id);
  };

  useEffect(() => {
    if(selectedProject==='')return;
    console.log(selectedProject);
    const secretCookie = getCookie('secret');
    const emailCookie = getCookie('email');
    const getdata=async function(){
      const projectdata=await fetch('http://localhost:8000/app/get_project',{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailid: emailCookie, secret: secretCookie, projectId:selectedProject })
      });
      const responsedata = await projectdata.json();
      changeprojectdetails(responsedata['project'])
      console.log(responsedata)
    }
    getdata();
    // fetch details from backend
  }, [selectedProject]);
  const navigate= useNavigate()
  return (
      <div className='Display_area'style={{backgroundColor: 'rgb(36,82,122)',color: 'rgb(93,172,189)',width: '100%',height: '100.6%',overflowY: 'scroll',scrollbarWidth: 'none',display: 'flex',flexWrap: 'wrap',justifyContent: 'space-evenly'}}>
         <div className="list_all" style={{width:'25%', display:'flex', flexDirection:'column'}} >
          <div className="add_new" style={{height:'10%', width:"100%",display:'flex', justifyContent:'end', paddingRight:'5%', alignItems:'center'}}>
            <i className={addState === 1? "fa-solid fa-plus fa-2xl rotated": "fa-solid fa-plus fa-2xl non-rotated"} style={{ color: 'rgb(93,172,189)', cursor: 'pointer' }} onClick={handeaddproject1}></i>
          </div>
          <div className="list_scroll" style={{height:'90%', width:"100%", overflow:'scroll'}}>
            {props.user.projects!=undefined && props.user.projects.map((project)=>(
              <div className="Card" style={{width:'100%', height:'20%', border:'1px solid', display:'flex'}}>
                <div className="card_details" style={{display:'flex', flexDirection:'column', paddingLeft:'5%', paddingTop:'4%'}}>
                  <h4>{project.Name}</h4>
                  <h6 style={{position:'relative', top:'10%'}}>Created by: {project.Owner}</h6>
                </div>
                <div className="view_project" onClick={handlegetprojectdetails} id={project.ID}>
                  <i className="fa-solid fa-angle-right fa-2xl" id={project.ID}></i>
                </div>
              </div>
            ))}            
          </div>
         </div>
         <div className="list_details" style={{width:'75%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
              {addState===1&&<CreateNewForm />}
              {selectedProject!==''&&<div style={{width:'80%', height:'80%', border:'1px solid'}}>

              </div>}
         </div>
      </div>
  );
}





