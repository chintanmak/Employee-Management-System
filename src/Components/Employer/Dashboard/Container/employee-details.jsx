import React, { Component } from 'react';
import '../../scss/_employee-details.scss';

export default class Employee_details extends Component {
  render() {
    return (
        <>
            <div className='employee-details-container'>
            <div className='employee-details-section'>

                <div className='employee-details-header'>
                    <p className='header-36 color-secondary'>Chintan Makwana</p>
                    <hr />
                </div>

                <div className='employee-details-info-section'>
                    
                    <div className='employee-details-info'>
                        <div className='employee-details-inside-header'>
                            <p className='input-label-24-bold'>Employee Details</p>
                        </div>
                        <div className='employee-details-inside-info'>
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
                            <hr />

                            <li className='input-label-24-bold color-secondary'>Joining Date:</li>
                            <p className='color-secondary input-label-24-bold'>12-Nov</p>
                        </ul>
                        </div>
                    </div>

                    <div className='employee-details-projects'>
                        <div className='employee-details-box1'>
                            <p className='input-label-24-bold color-secondary'>
                            Assigned Projects
                            </p>
                            <button className='active-button'>
                            10
                            </button>
                        </div>

                        <div className='employee-details-box1'>
                            <p className='input-label-24-bold color-secondary'>
                            Completed Projects
                            </p>
                            <button className='active-button'>
                            09
                            </button>
                        </div>

                        <div className='employee-details-box1'>
                            <p className='input-label-24-bold color-secondary'>
                            Pending Projects
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
