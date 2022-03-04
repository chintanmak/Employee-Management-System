import React, { Component } from 'react';
import '../../scss/_pendingprojects.scss';

import totalprojecticon from '../../../Assets/svgs/totalproject.svg';
import pendingprojecticon from '../../../Assets/svgs/pendingproject.svg';
import assignprojecticon from '../../../Assets/svgs/assignproject.svg';


export default class Pending_projects extends Component {
  render() {
    return (
      <>
        <div className='Pending-project-page'>
            
            <div className='Pending-project-container'>
                <div className='Pending-project-details-header'>
                    <p className='header-36 color-secondary'>Projects</p>
                </div>
                <hr />
                <div className='projects-sections'>
                    <button className='nonactive-button'><a href='/Total-Projects'><img src={totalprojecticon} /> Total Projects</a></button>
                    <button className='active-button'><a href='/Pending-Projects'><img src={pendingprojecticon} /> Pending Projects</a></button>
                    <button className='nonactive-button'><a href='/Assign-Projects'><img src={assignprojecticon} /> Assign Projects</a></button>
                </div>

                <div className='Pending-project-main-list'>
                <div className='Pending-project-header-list'>
                    <p className='input-label-24-bold color-white'>Employee Name</p>
                    <p className='input-label-24-bold color-white'>Reg. Date</p>
                    <p className='input-label-24-bold color-white'>See Details</p>
                </div>

                <div className='Pending-project-main-list'>
                    <p className='input-label-24-bold color-lightgreen'>Chintan Makwana</p>
                    <p className='input-label-24-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-24-bold color-lightgreen'><a href='/Project-view-details'>View</a></p>
                </div>


                </div>

            </div>
            
        </div>
      </>
    )
  }
}
