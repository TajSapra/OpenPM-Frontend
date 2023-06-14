import React from 'react'
export default function About() {
    return (
    <>
        <div className='Display_area' style={{backgroundColor:'rgb(36,82,122)', color:'rgb(93,172,189)', width:'100%', height:'100%', overflowY:'scroll', scrollbarWidth:'none', display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignContent:'center'}}>
            <div style={{width:"50%", justifyContent:'center', display:'flex', textAlign:'center'}}>
            <form id='login_form'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{position:'relative', left:'30%'}}/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" id='Submit_Button_Login_form'>Submit</button>
            </form>            

            </div>
        </div>
    </>
  )
}
