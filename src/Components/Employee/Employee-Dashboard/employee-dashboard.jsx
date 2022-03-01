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
import Project_list from './Employee-Container/project-list';
import Project_details from './Employee-Container/project-details';
import Project_Submission from './Employee-Container/project-submission';
import Application_list from './Employee-Container/application-list';
import Add_application from './Employee-Container/add-application';
import Application_details from './Employee-Container/application-details';
import Tracker from './Employee-Container/tracker';

export default class Employee_dashboard extends Component {
  render() {
    return (
<>
<div className='dashboard'>
            <div className='left-navigation-panel'>
            <div className='dashboard-logo'>
                <img src={companylogo}  className="logo" />
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
                    <img src={projecticon} />
                    Projects
                    </li>

                    <li>
                    <img src={applicationicon} />
                    Application
                    </li>
                    
                    <li>
                    <a href='/Tracker'>
                    <img src={addemployeeicon} />
                    Tracker
                    </a>
                    </li>

                    <li>
                    <img src={logouticon} />
                    Logout
                    </li>
                </ul>
            </div>

            </div>

            <div className='right-dashboard-panel'>
           
             <Outlet />
            

            {/* <Employee_profile /> */}
            {/* <Project_list /> */}
            {/* <Project_details /> */}
            {/* <Project_Submission /> */}
            {/* <Application_list /> */}
            {/* <Add_application /> */}
            {/* <Application_details /> */}
            {/* <Tracker /> */}
            </div>

        </div>
</>
    )
  }
}
