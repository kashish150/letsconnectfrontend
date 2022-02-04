import React,{useState,useEffect} from'react';
import './App.css';
import Header from'./header';
import {Route, BrowserRouter,Switch,Link} from 'react-router-dom';
import Login from'./Login.js';
import Register from'./Register';
import {Provider} from 'react-redux';
import store from './Store';
import Post from './Posts';
import Alert from './Alert';
import Auth from './Auth';
function App() {

  return (
    // <Provider store={store}>
    <div>
    <Header/>
    {/* <Alert/> */}
      <Auth path="/posts" exact  component={Post} />
      <Route path="/Login" exact  component={Login} />
      <Route path="/Register" exact  component={Register} />
    </div>
    // </Provider>
  );
}

export default App;
