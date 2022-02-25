import React, { Component } from 'react';
import '../../scss/_employee-profile.scss';

export default class Employee_profile extends Component {
  render() {
    return (
      <>
           <div className='employee-profile-details-container'>
            <div className='employee-profile-details-section'>

                <div className='employee-profile-details-info-section'>
                    
                    <div className='employee-profile-details-info'>
                        <div className='employee-profile-details-inside-header'>
                            <p className='input-label-24-bold'>Profile Details</p>
                        </div>
                        <div className='employee-profile-details-inside-info'>
                        <ul>
                    
                            <li className='input-label-24-bold color-secondary'>Name:</li>
                            <p className='color-secondary input-label-24-bold'>Chintan Makwana</p>
                            <hr />
                        
                            <li className='input-label-24-bold color-secondary'>Email:</li>
                            <p className='color-secondary input-label-24-bold'>Chintanmakwana2011@gmail.com</p>
                            <hr />
                            
                            <li className='input-label-24-bold color-secondary'>Role:</li>
                            <p className='color-secondary input-label-24-bold'>Software Developer</p>
                            <hr />

                            <li className='input-label-24-bold color-secondary'>Phone:</li>
                            <p className='color-secondary input-label-24-bold'>9699421928</p>
                        
                        </ul>
                        </div>
                    </div>

                    <div className='employee-profile-details-projects'>
                        <div className='employee-profile-details-box1'>
                            <p className='header-36 color-secondary'>
                            Assigned Projects
                            </p>
                            <button className='active-button'>
                            10
                            </button>
                        </div>

                        <div className='employee-profile-details-box1'>
                            <p className='header-36 color-secondary'>
                            Completed Projects
                            </p>
                            <button className='active-button'>
                            09
                            </button>
                        </div>

                        <div className='employee-profile-details-box1'>
                            <p className='header-36 color-secondary'>
                            Pending  
                            <br /> Projects
                            </p>
                            <button className='active-button'>
                            01
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            </div>
      </>
    )
  }
}
