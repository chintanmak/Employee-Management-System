import React, { Component } from 'react';
import '../scss/_employee-dashboard.scss';
import '../../Scss/main.scss';

import { Outlet } from 'react-router-dom';

import companylogo from '../../Assets/img/Digitalcompanylogo.png';
import employeelisticon from '../../Assets/svgs/employeelist.svg';
import projecticon from '../../Assets/svgs/projects.svg';
import applicationicon from '../../Assets/svgs/application.svg';
import addemployeeicon from '../../Assets/svgs/addemployee.svg';
import logouticon from '../../Assets/svgs/logout.svg';
import Employee_profile from './Employee-Container/employee-profile';

export default class Employee_dashboard extends Component {
  render() {
    return (
<>
<div className='dashboard'>
            <div className='left-navigation-panel'>
            <div className='dashboard-logo'>
                <a href='/Employee-profile'><img src={companylogo}  className="logo" /></a>
            </div>
            <div className='left-navigation-menu-container'>
  
                <ul className='input-label-24-bold'>
                    <li>
                    <a href='/Employee-profile'>
                    <img src={employeelisticon} />
                    Profile
                    </a>
                    </li>

                    <li>
                    <a href='/Project-list'>
                    <img src={projecticon} />
                    Projects
                    </a>
                    </li>

                    <li>
                    <a href='/application-list'>
                    <img src={applicationicon} />
                    Application
                    </a>
                    </li>

                    <li>
                    <a href='/Tracker'>
                    <img src={addemployeeicon} />
                    Tracker
                    </a>
                    </li>

                    <li>
                    <a href='/Employeelogin'>
                    <img src={logouticon} />
                    Logout
                    </a>
                    </li>
                </ul>
            </div>

            </div>

            <div className='right-dashboard-panel'>
           
             <Outlet />
            
            </div>

        </div>
</>
    )
  }
}
