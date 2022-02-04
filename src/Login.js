import react from 'react';
import {useState} from 'react';
import axios from 'axios';
import './Login.css';
import {useHistory} from 'react-router-dom';
function Login(){
  const [email,setusername]=useState('');   
  const [password,setpassword]=useState('');
  function  changeusername(event){
    setusername(event);
  }
  function  changepassword(event){
    setpassword(event);
  }
  const history =useHistory(); 
  async  function senddata  (){
    console.log("send");
    console.log(email);
    console.log(password);
    axios.post("http://localhost:4000/api/auth/",{
        email:email,
        password:password
      }).then((res)=>{
  console.log(res.data)
  localStorage.setItem('token',JSON.stringify(res.data.token))
  axios.defaults.headers.common["x-auth-token"] = JSON.stringify(res.data.token);
  history.push('/posts');
      },(err)=>{console.log(err);})

  }
return <div className='m-login'>
  <div className='m-login-img'>
   <img src="https://i.pinimg.com/474x/f4/c3/54/f4c3549f4aaaecee854cbddf44c0ac77.jpg"></img> 
  </div>
    <div className="m-login-div">
     <h1>Login</h1>
    <input type="text" onChange={(event)=>{changeusername(event.target.value)}}></input><label>Username</label>
    <br></br>
    <input type="password" onChange={(event)=>{changepassword(event.target.value)}}></input><label>Password</label>
   <br></br>
    <button onClick={()=>{senddata()}}>Login</button>
  </div>

</div>
}export default Login;

