import React, { Fragment,useEffect } from 'react';
import { Redirect,Route, } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
function Auth(props) {
    const history =useHistory(); 
    useEffect(()=>{
        const token=JSON.parse(localStorage.getItem('token'));
    console.log(token);
    if(token==null){console.log("true");
    history.push('/Login')}
    else{
    history.push('/Posts')}
    },[]); 
  return <Route {...props}/> 
}
export default Auth;