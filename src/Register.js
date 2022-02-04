import react from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
 import './Register.css';
 import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {setAlert} from '../src/actions/alert'
// import {register} from '../src/actions/auth';
// const Register = ({setAlert,register})=>{
//     const [name,setname]=useState('');
//     const [email,setemail]=useState('');
//     const [password,setpassword]=useState('');

//     function senddata(){
//        register({name,email,password});
  
//     }
const Register = ({setAlert,register})=>{
   
        const [name,setname]=useState('');
        const [email,setemail]=useState('');
        const [password,setpassword]=useState('');
        const history =useHistory(); 
        function senddata(){
            axios.post("http://localhost:4000/api/users/u",{
            name:name,   
            email:email,
                password:password
              }).then((res)=>{
            localStorage.setItem('token', JSON.stringify(res.data.token))
          console.log(res.data)
          axios.defaults.headers.common["x-auth-token"] = JSON.stringify(res.data.token);
        history.push('/posts');
              },(err)=>{console.log(err);})
          }
      
        

return <div className='register-form'>
<div className='r-img'>
   <img src="data:image/jpeg;base64,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"></img>
   </div>
    <div className="form">
<form > 
<input type="text" required onChange={(event)=>{setname(event.target.value)}} required></input><label>Name</label><br></br>
<input type="text" required onChange={(event)=>{setemail(event.target.value)}}required></input><label>Email</label><br></br>
<input type="text" required onChange={(event)=>{setpassword(event.target.value)}}required></input><label>Password</label><br></br>
</form>
<div className='r-btn-div'>
<button onClick={()=>{senddata()}}>Register</button>
</div>
</div>
</div>
}
// }
// Register.propTypes={
//     setAlert:PropTypes.func.isRequired,
//     register:PropTypes.func.isRequired
// };
// export default connect(null,{setAlert,register})(Register);
export default Register;