import React, { Component } from 'react';
import './scss/_employeelogin.scss';
import Employee from '../Assets/img/Employee.png';
import companylogo from '../Assets/img/Digitalcompanylogo.png';

export default class Employeelogin extends Component {
  render() {
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
                        placeholder='username'
                    />
                </div>
                <div className='loginuserpass'>

                    <p className='color-secondary input-label-24'>Password: </p>
                    <input type="text" 
                        className='loginids'
                        placeholder='password'
                    />
                </div>
                    <button className='primarybtn'><a href='/Employee-Dashboard'>LOGIN</a></button>
                
                </div>
            </div>
        </div>
      </>
    )
  }
}
