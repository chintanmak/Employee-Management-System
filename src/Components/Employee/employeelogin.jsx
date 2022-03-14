import React, { Component, useState } from 'react';
import './scss/_employeelogin.scss';
import Employee from '../Assets/img/Employee.png';
import companylogo from '../Assets/img/Digitalcompanylogo.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Employeelogin =()=> {
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");

    const redirect = useNavigate()

    const onSubmit =async()=>{
        console.log(email,phone)
       
            try {
              const data = await axios.get(`http://localhost:4000/app/get-data/${email}/${phone}`);
              console.log(data.data);
              
              if(data.data.status==200){
                redirect("/Employee-Dashboard");  
              }else{
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
                    <img src={Employee}  className="empimg" />
                </div>
                <div className='login-section'>
                <h1 className='color-secondary header-36-reg'>LOGIN</h1>
                <div className='loginuserpass'>

                    <p className='color-secondary input-label-24'>Username: </p>
                    <input type="text" 
                        className='loginids'
                        value={email}
                        onChange={(e)=> setemail(e.target.value)}
                        placeholder='username'
                    />
                </div>
                <div className='loginuserpass'>

                    <p className='color-secondary input-label-24'>Password: </p>
                    <input type="text" 
                        className='loginids'
                        value={phone}
                        onChange={(e)=> setphone(e.target.value)}
                        placeholder='password'
                    />
                </div>
                    <button className='primarybtn' onClick={onSubmit}>LOGIN</button>
                
                </div>
            </div>
        </div>
      </>
    )
  

}

export default  Employeelogin;
