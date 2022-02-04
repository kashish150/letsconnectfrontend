import react, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import './Posts.css';
function Posts(){
  var token=JSON.parse(localStorage.getItem('token'))
  console.log(token)
  const[s,us]=useState('');
  const [post,setpost]=useState('');   
  const [comment,setcomment]=useState(''); 
  function  changepost(event){
    setpost(event);
  }
  const [postdata,setpostdata]=useState('');   
  axios.defaults.headers.common["x-auth-token"] = token;
  useEffect(() => {
    axios.get("http://localhost:4000/api/posts/").then((res)=>{
    setpostdata(res.data);

 },(err)=>{console.log(err);})
  
 }, [s])
 async  function deletepost(id){
  var token=JSON.parse(localStorage.getItem('token'))
  axios.defaults.headers.common["x-auth-token"] = token;
  axios.delete(`http://localhost:4000/api/posts/${id}`).then((res)=>{
us(s+'b');
    },(err)=>{console.log(err);})

}
  async  function senddata  (){
    var token=JSON.parse(localStorage.getItem('token'))
    axios.defaults.headers.common["x-auth-token"] = token;
    axios.post("http://localhost:4000/api/posts/", {
    "text":post
  }).then((res)=>{
  us(s+'b');
      },(err)=>{console.log(err);})

  }
  
  async  function like (id){
    var token=JSON.parse(localStorage.getItem('token'))
    axios.defaults.headers.common["x-auth-token"] = token;
    axios.put(`http://localhost:4000/api/posts/like/${id}`).then((res)=>{
  us(s+'b');
      },(err)=>{alert("Post already liked")})

  }
  async  function unlike (id){
    var token=JSON.parse(localStorage.getItem('token'))
    axios.defaults.headers.common["x-auth-token"] = token;
    axios.put(`http://localhost:4000/api/posts/unlike/${id}`).then((res)=>{

  us(s+'b');
      },(err)=>{alert("Post already unliked")})

  }
  async  function commentsenddata(id){
    var token=JSON.parse(localStorage.getItem('token'))
    axios.defaults.headers.common["x-auth-token"] = token;
    axios.post(`http://localhost:4000/api/posts/comment/${id}`, {
    "text":comment
  }).then((res)=>{
  console.log(res.data)
  us(s+'b');
      },(err)=>{console.log(err);})

  }
  function  changecomment(event){
    setcomment(event);
  }
  return <div>
<div className='posts-div'>
<div className='posts-uc posts-i-div-uc'>
  <input placeholder='write somenthing...' onChange={(e)=>{setpost(e.target.value)}}></input>
  <button className='posts-btn' onClick={()=>{senddata()}}>Post</button>
</div>
{postdata.length>0?<div>
    {postdata.map((data,index)=>{ data.key=index+1
                  return<div className='posts-i-div' key={data._id}>
                     <div className='div-post-name'>
                       <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWBtH1pA448PLuHhhQmzfLhrb7IOZ0x4v_g&usqp=CAU"/></div>
                       <div className='name'>{data.name}</div>
                       <div className='post-likes'>Likes {data.likes.length}</div>
                       <button className='posts-cmt-btn' onClick={()=>{like(data._id)}}>Like</button>
                       <button className='posts-cmt-btn' onClick={()=>{unlike(data._id)}}>Unlike</button>
                       </div>
                     <div className='div-posts-text'><div className='flex'>{data.text} <div className='posts-cmt-btn'onClick={()=>{deletepost(data._id)}} >Delete</div></div>

<div className='post-comments-section'>

<hr></hr>
  comments
  <div className='comment-posts'>
  <input className='post-comment' onChange={(event)=>{changecomment(event.target.value)}}></input><button className='posts-cmt-btn' onClick={()=>{commentsenddata(data._id)}}>Post</button></div>
  {data.comments.length>0?<div className='posts-text'>{
   
    data.comments.map((data,index)=>{ data.key=index+1
    return <div className='post-cmt-user' key={data._id}>
    <div> 
      <img className='cmt-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWBtH1pA448PLuHhhQmzfLhrb7IOZ0x4v_g&usqp=CAU"></img>
      {data.name}</div><div className='flex'> <div className='cmt-txt'>{data.text} </div></div></div>})}</div>:
  <div>Be the first one to comment</div>}
  
</div>
</div>


</div>})}</div> :
            <div>
              Data not available
            </div>
           
            }
            </div>


            <div >
</div>
   </div>

}export default Posts;