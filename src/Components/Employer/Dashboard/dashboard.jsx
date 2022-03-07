import React, { Component } from 'react';
import '../scss/_dashboard.scss';
import '../../Scss/main.scss';

import companylogo from '../../Assets/img/Digitalcompanylogo.png';
import employeelisticon from '../../Assets/svgs/employeelist.svg';
import addemployeeicon from '../../Assets/svgs/addemployee.svg';
import projecticon from '../../Assets/svgs/projects.svg';
import applicationicon from '../../Assets/svgs/projects.svg';
import logouticon from '../../Assets/svgs/logout.svg';
import Employer_dashboard from './Container/employer-dashboard';
import { Outlet } from 'react-router-dom';
import Employee_application from './Container/employeeapplication';


export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className='dashboard'>
            <div className='left-navigation-panel'>
            <div className='dashboard-logo'>
                <a href='/Employer-dashboard'><img src={companylogo}  className="logo" /></a>
            </div>
            <div className='left-navigation-menu-container'>
  
                <ul className='input-label-24-bold'>
                    <li>
                    <a href='/Employee-list'>
                    <img src={employeelisticon} />
                    Employee List
                    </a>
                    </li>

                    <li>
                    <a href='/Add-Employee'>
                    <img src={addemployeeicon} />
                    Add Employee
                    </a>
                    </li>

                    <li>
                    <a href='/Total-Projects'>
                    <img src={projecticon} />
                    Projects
                    </a>
                    </li>

                    <li>
                    <a href='/Employee-application'>
                    <img src={applicationicon} />
                    Application
                    </a>
                    </li>

                    <li>
                    <a href='/Employerlogin'>
                    <img src={logouticon} />
                    Logout
                    </a>
                    </li>

                </ul>
            </div>

            </div>

            <div className='right-dashboard-panel'>
            <Outlet />
            {/* <Employee_application /> */}
            </div>

        </div>
      </>
    )
  }
}
