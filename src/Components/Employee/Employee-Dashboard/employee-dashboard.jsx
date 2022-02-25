import React, { Component } from 'react';
import '../scss/_employee-dashboard.scss';
import '../../Scss/main.scss';

import companylogo from '../../Assets/img/Digitalcompanylogo.png';
import employeelisticon from '../../Assets/svgs/employeelist.svg';
import projecticon from '../../Assets/svgs/projects.svg';
import applicationicon from '../../Assets/svgs/application.svg';
import addemployeeicon from '../../Assets/svgs/addemployee.svg';
import logouticon from '../../Assets/svgs/logout.svg';
import Employee_profile from './Employee-Container/employee-profile';
import Project_list from './Employee-Container/project-list';
import Project_details from './Employee-Container/project-details';

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
                    <li><img src={employeelisticon} />Profile</li>
                    <li><img src={projecticon} />Projects</li>
                    <li><img src={applicationicon} />Application</li>
                    <li><img src={addemployeeicon} />Tracker</li>
                    <li><img src={logouticon} />Logout</li>
                </ul>
            </div>

            </div>

            <div className='right-dashboard-panel'>
           
            <Employee_profile />
            <Project_list />
            <Project_details />
            
            </div>

        </div>
</>
    )
  }
}
