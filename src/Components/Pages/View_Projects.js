import React, { useState, useEffect } from 'react';
import Project_Card from '../Unit Components/Project_Card'
import CreateNewForm from '../Unit Components/CreateNewForm'
import { getCookie, setCookie } from '../Unit Components/CookieUtils';
import { useNavigate } from 'react-router-dom';

export default function Profile(props) {
  const [addState, changeAddState]=useState(0)
  const handeaddproject1=async function(){
    changeAddState(1-addState)
  }
  const navigate= useNavigate()
  return (
      <div className='Display_area'style={{backgroundColor: 'rgb(36,82,122)',color: 'rgb(93,172,189)',width: '100%',height: '100.6%',overflowY: 'scroll',scrollbarWidth: 'none',display: 'flex',flexWrap: 'wrap',justifyContent: 'space-evenly'}}>
         <div className="list_all" style={{width:'25%', display:'flex', flexDirection:'column'}} >
          <div className="add_new" style={{height:'10%', width:"100%",display:'flex', justifyContent:'end', paddingRight:'5%', alignItems:'center'}}>
            <i className={addState === 1? "fa-solid fa-plus fa-2xl rotated": "fa-solid fa-plus fa-2xl non-rotated"} style={{ color: 'rgb(93,172,189)', cursor: 'pointer' }} onClick={handeaddproject1}></i>
          </div>
          <div className="list_scroll" style={{height:'90%', width:"100%", overflow:'scroll'}}>
            {props.user.projects!=undefined && props.user.projects.map((project)=>(
              <Project_Card curr={project}/>
            ))}            
          </div>
         </div>
         <div className="list_details" style={{width:'75%'}}>
              {addState===1&&<CreateNewForm />}
         </div>
      </div>
  );
}





