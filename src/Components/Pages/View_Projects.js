import React, { useState, useEffect } from 'react';
import CreateNewForm from '../Unit Components/CreateNewForm'
import { getCookie, setCookie } from '../Unit Components/CookieUtils';
import { useNavigate } from 'react-router-dom';

export default function Profile(props) {
  const secretCookie = getCookie('secret');
  const emailCookie = getCookie('email');
const [addState, changeAddState]=useState(0)
  const [selectedProject, changeSelectedProject]=useState('')
  const [projectdetails, changeprojectdetails]=useState(undefined)
  const [newprojectname, changenewprojectname]=useState("")
  const [newprojectdesc, changenewprojectdesc]=useState("")
  const handeaddproject1=async function(){
    changeAddState(1-addState)
    changeprojectdetails(undefined)
    changeSelectedProject('')
  }
  const handlegetprojectdetails = function(e) {
    changeSelectedProject(e.target.id);
    changeAddState(0)    
  };
  const handleRemoveProject=function(){
    changeprojectdetails(undefined)
    changeSelectedProject('')
  }
  const handleSubmitForm=async function(event){
    event.preventDefault()
    console.log(newprojectname, newprojectdesc)
    const responsedata=await fetch('http://localhost:8000/app/create_project',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailid: emailCookie, secret:secretCookie,  project_details:{name:newprojectname, desc:newprojectdesc}})
    })
    const responsedatapromise=responsedata.json()
    responsedatapromise.then((responsedata)=>{
      props.setuser(responsedata.user)
      changeAddState(0)
      changeprojectdetails(undefined)
      changeSelectedProject('')
  
    })

  }
  useEffect(() => {
    if(selectedProject==='')return;
    console.log(selectedProject);
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
              {addState===1&&
              <div style={{display:'flex', flexDirection:'column', height:'100%', width:'100%', justifyContent:'center', alignItems:'center'}}>
                <div style={{ position: 'relative', top: '-20%', fontSize: '2.5vw', left: '' }}>
                Lets cook a new project for you.
              </div>            
              <form style={{ display: 'flex', flexDirection: 'column', width: '15vw' }} onSubmit={handleSubmitForm}>                
                <label htmlFor="project_name">Project Name</label>                                
                <input type="text" name="project_name" id="project_name" required value={newprojectname} onChange={(e)=>changenewprojectname(e.target.value)}/>                                
                <label htmlFor="project_description" style={{marginTop:'10%'}}>Project Description</label>                                
                <input type="text" name="project_description" id="project_description" required value={newprojectdesc} onChange={(e)=>changenewprojectdesc(e.target.value)}/>                               
                <input type="submit" id="submitbttn" style={{ position: 'relative', width: '33%', left: '33%', top:'20%' }} />           
              
              </form>                      
              
              </div>
              }
              {selectedProject!==''&&projectdetails!==undefined&&<div style={{width:'80%', height:'80%', border:'1px solid', display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex' ,alignItems:'center'}}>
                  <h1 style={{textAlign:'center', width:'100%'}}>Project Details</h1>
                  <i className="fa-solid fa-plus fa-2xl rotated" style={{ color: 'rgb(93,172,189)', cursor: 'pointer', position:'relative', left:'-4%' }} onClick={handleRemoveProject}></i>
                </div>
                <div style={{display:'flex', height:'44.5%'}}>
                  <div style={{width:'33%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <h3>Project Name:</h3>
                    <h3>{projectdetails.project_name}</h3>
                  </div>                  
                  <div style={{width:'33%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <h3>Project Owner:</h3>
                    <h3>{projectdetails.project_owner}</h3>
                  </div>                  
                  <div style={{width:'33%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <h3>Project Description:</h3>
                    <div style={{width:'100%',wordWrap: 'break-word', overflowWrap: 'break-word'}}>{projectdetails.project_desc}</div>
                  </div>                  

                </div>
                <div style={{display:'flex',height:'44.5%'}}>
                <div style={{width:'33%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <h3>Contributors:</h3>
                    <h3>{projectdetails.contributors==null?1:projectdetails.contributors.length+1}</h3>
                  </div>                  
                  <div style={{width:'33%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <h3>Completed Tasks:</h3>
                    <h3>{projectdetails.completed_tasks==null?0:projectdetails.completed_tasks.length}</h3>
                  </div>                  
                  <div style={{width:'33%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <h3>Assigned/Todo Tasks:</h3>
                    <h3>{projectdetails.assigned_tasks.length + projectdetails.todo_tasks.length}</h3> 
                  </div>                  

                </div>

              </div>}
         </div>
      </div>
  );
}





