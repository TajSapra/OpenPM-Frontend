import React from 'react'

export default function Project_Card(props) {
  const handlegetprojectdetails=function(e){
    props.changer(e.target.id)
    console.log(e.target.id)    
  }
  return (
        <div className="Card" style={{width:'100%', height:'20%', border:'1px solid', display:'flex'}}>
            <div className="card_details" style={{display:'flex', flexDirection:'column', paddingLeft:'5%', paddingTop:'4%'}}>
              <h4>{props.curr.Name}</h4>
              <h6 style={{position:'relative', top:'10%'}}>Created by: {props.curr.Owner}</h6>
            </div>
            <div className="view_project" onClick={handlegetprojectdetails} id={props.curr.ID}>
              <i className="fa-solid fa-angle-right fa-2xl" id={props.curr.ID}></i>
            </div>
        </div>
  )
}
