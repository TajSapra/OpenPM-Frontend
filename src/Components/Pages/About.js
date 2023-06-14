import React from 'react'

export default function About() {
  return (
    <>
        <div className='Display_area' style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)', width:'100%', height:'100%', overflowY:'scroll', scrollbarWidth:'none', display:'flex', flexDirection:'column'}}>
          <div className="upperhalf" style={{height:'50%', width:'100%', border:'solid 1px black'}}>
            <div className="compartments">
              
            </div>
            <div className="compartments"></div>
          </div>
          <div className="lowerhalf" style={{height:'50%', width:'100%', border:'solid 1px black'}}>
            <div className="compartments"></div>
            <div className="compartments"></div>
  
          </div>
        </div>
    </>
  )
}
