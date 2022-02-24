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
import Employee_list from './Container/employeelist';
import Add_employee from './Container/addemployee';
import Employee_details from './Container/employee-details';
import Employee_application from './Container/employeeapplication';
import Total_projects from './Container/totalprojects';
import Pending_projects from './Container/pendingprojects';
import Assign_projects from './Container/assignprojects';
import Employee_application_details from './Container/employee-application-details';
import Project_view_details from './Container/project-view-details';

export default class Dashboard extends Component {
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
                    <li><img src={employeelisticon} />Employee List</li>
                    <li><img src={addemployeeicon} />Add Employee</li>
                    <li><img src={projecticon} />Projects</li>
                    <li><img src={applicationicon} />Application</li>
                    <li><img src={logouticon} />Logout</li>
                </ul>
            </div>

            </div>

            <div className='right-dashboard-panel'>
            <Employer_dashboard />
            <Employee_list />
            <Add_employee />
            <Employee_details />
            <Total_projects />
            <Pending_projects />
            <Project_view_details />
            <Assign_projects />
            <Employee_application />
            <Employee_application_details />
            </div>

        </div>
      </>
    )
  }
}
