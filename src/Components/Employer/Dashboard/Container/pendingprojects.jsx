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
                    <p className='input-label-24 color-secondary'>Projects</p>
                </div>
                <hr />
                <br />
                <div className='projects-sections'>
                    <button className='nonactive-button'><img src={totalprojecticon} /> Total Projects</button>
                    <button className='active-button'><img src={pendingprojecticon} /> Pending Projects</button>
                    <button className='nonactive-button'><img src={assignprojecticon} /> Assign Projects</button>
                </div>

                <div className='Pending-project-main-list'>
                <div className='Pending-project-header-list'>
                    <p className='input-label-15-bold color-white'>Employee Name</p>
                    <p className='input-label-15-bold color-white'>Reg. Date</p>
                    <p className='input-label-15-bold color-white'>See Details</p>
                </div>

                <div className='Pending-project-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Chintan Makwana</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>


                </div>

            </div>
            
        </div>
      </>
    )
  }
}
