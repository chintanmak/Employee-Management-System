import React, { Component } from 'react';
import './Scss/_dashboard.scss';
import companylogo from '../../Assets/img/Digitalcompanylogo.png';
import employeelisticon from '../../Assets/svgs/employeelist.svg';
import addemployeeicon from '../../Assets/svgs/addemployee.svg';
import projecticon from '../../Assets/svgs/projects.svg';
import applicationicon from '../../Assets/svgs/projects.svg';
import logouticon from '../../Assets/svgs/logout.svg';

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
                <ul className='input-label-15-bold'>
                    <li><img src={employeelisticon} />Employee List</li>
                    <li><img src={addemployeeicon} />Add Employee</li>
                    <li><img src={projecticon} />Projects</li>
                    <li><img src={applicationicon} />Application</li>
                    <li><img src={logouticon} />Logout</li>
                </ul>
            </div>

            </div>
        </div>
      </>
    )
  }
}
