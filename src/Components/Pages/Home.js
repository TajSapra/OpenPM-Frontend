import React from 'react'

export default function Home() {
  return (
    <>
      <div className='Display_area' style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)', width:'100%', height:'100%', overflowY:'scroll', scrollbarWidth:'none', display:'flex', flexDirection:'column'}}>
        <div className="upperhalf">
          <div className="compartments">
          <img src={require('../../Assets/Logos/logo_noname.png')} className="d-inline-block align-text-center" alt="" width="300" height="300"/>
          </div>
          <div className='compartments'>
            <div>OpenPM is as open source Project Management Tool that is developed for team leaders and managers to automate tedious tasks and increase the productivity of the employees</div>
          </div>
        </div>
        <div className="lowerhalf">
          <div className='compartments'>
            <div>
              OpenPM benefits<br />                
                <ul>
                    <li>Seamless Experience</li>
                    <li>Easy and robust UI</li>
                    <li>Accurate Predictions</li>
                    <li>Increases Work Efficiency of team members</li>
                    <li>Reduces the need of Redundant applications</li>
                </ul>
            </div>
          </div>
          <div className='compartments'>
            <img src="https://t3.ftcdn.net/jpg/02/86/52/70/360_F_286527093_HHP1fpTCI8tNDQwypBWAXsVmByASPpPX.jpg" className='image2'/>
          </div>
        </div>
      </div>
    </>
  )
}
