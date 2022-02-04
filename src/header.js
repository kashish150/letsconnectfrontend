import React,{useState,useEffect} from'react';
import './header.css';
import {Route, BrowserRouter,Switch,Link} from 'react-router-dom';
function header() {
  async  function logout(){
    localStorage.clear();
  }
    return (
      <div className='h-main'>
          <div className='h-main-chat'>Let's Connect</div>
          <div>

          <Link to='/login'><button className='h-btn btn-media-none'>About</button></Link>
              <button className='h-btn btn-media-none'>Community</button>
          </div>
          <div>
             <Link to='/login'><button className='h-btn'>Log in</button></Link>
             <Link to="/Register" ><button className='h-btn'>Sign in</button></Link>
             <Link to="/Login" ><button className='h-btn' onClick={()=>{logout()}}>Logout</button></Link>
          </div>
    </div>)
  }
  
  export default header;
  