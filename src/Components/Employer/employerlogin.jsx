import React, { Component, useState } from 'react';
import './scss/_employerlogin.scss';

import employer from '../Assets/img/Employer.png';
import companylogo from '../Assets/img/Digitalcompanylogo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Employerlogin = () =>{

  const [username, setusername] = useState ("");
  const [password, setpassword] = useState ("");
  const redirect = useNavigate()
  
  const onSubmit = async()=>{
    const user = {username: 'Chintanmak', password: 'Chintan@123'}
    console.log(username , password)
    try {
      if(user.username==username && user.password==password){
        redirect("/Dashboard")
      }
     else{
      alert("Invalid Credentials")
      }

      
    } catch (err) {
      console.log(err);
    }

  }
  
    return (
      <>
        <div className='login-page'>
            <div className='login-container'>
                <div className='login-logo'>
                    <img src={companylogo} className="logo" />
                    <img src={employer}  className="empimg" />
                </div>
                <div className='login-section'>
                <h1 className='color-secondary header-36-reg'>LOGIN</h1>
                <div className='loginuserpass'>

                    <p className='color-secondary input-label-24'>Username: </p>
                    <input type="text" 
                        className='loginids'
                        placeholder='username'
                        value={username}
                        onChange={(e)=>setusername(e.target.value)}
                    />
                </div>
                <div className='loginuserpass'>

                    <p className='color-secondary input-label-24'>Password: </p>
                    <input type="password" 
                        className='loginids'
                        placeholder='password'
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                    />
                </div>
                    <button className='primarybtn' onClick={onSubmit}>Login</button>
                
                </div>
            </div>
        </div>
      </>
    )
  }

export default Employerlogin;