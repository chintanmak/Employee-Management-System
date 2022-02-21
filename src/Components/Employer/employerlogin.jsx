import React, { Component } from 'react';
import './scss/_employerlogin.scss';

import employer from '../Assets/img/Employer.png';
import companylogo from '../Assets/img/Digitalcompanylogo.png';

export default class Employerlogin extends Component {
  render() {
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
                    />
                </div>
                <div className='loginuserpass'>

                    <p className='color-secondary input-label-24'>Password: </p>
                    <input type="password" 
                        className='loginids'
                        placeholder='password'
                    />
                </div>
                    <button className='primarybtn'>LOGIN</button>
                
                </div>
            </div>
        </div>
      </>
    )
  }
}
