import React, { Component } from 'react';
import '../../scss/_employer-dashboard-container.scss';

import employeelisticon from '../../../Assets/svgs/employeelist.svg';
import addemployeeicon from '../../../Assets/svgs/addemployee.svg';

export default class Employer_dashboard extends Component {
  render() {
    return (
      <>
        <div className='employer-dashboard-container'>
            <div className='employer-dashboard-section'>
              
              <div className='employer-list-dashboard'>
                <p className='input-label-24-bold color-lightgreen'><img src={employeelisticon} /> Employee List</p>
                <span>

                <button className='active-button'> Chintan Makwana </button>
                <button className='nonactive-button'> Prateek kuber </button>
                <button className='nonactive-button'> Govind kshirsagar </button>
                
                </span>
                
                <button className='nonactive-button addemp-list'> <img src={addemployeeicon} /> Add Employee </button>

              </div>

              <div className='employer-details-section'>
              <div className='employer-details-section2'>
                <div className='empoyer-details-header input-label-24-bold'>
                  Employee details
                </div>
                <div className='empoyer-info-section'>
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

            <div className='employer-details-box-section'>
              <div className='employer-info-box1'>
                <p className='input-label-24-bold color-secondary'>
                  Assigned Projects
                </p>
                <button className='active-button'>
                  10
                </button>
              </div>

              <div className='employer-info-box1'>
                <p className='input-label-24-bold color-secondary'>
                  Completed Projects
                </p>
                <button className='active-button'>
                  09
                </button>
              </div>

              <div className='employer-info-box1'>
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
