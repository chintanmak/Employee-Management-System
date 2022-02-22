import React, { Component } from 'react';
import '../../scss/_totalprojects.scss';
import totalprojecticon from '../../../Assets/svgs/totalproject.svg';
import pendingprojecticon from '../../../Assets/svgs/pendingproject.svg';
import assignprojecticon from '../../../Assets/svgs/assignproject.svg';

export default class Total_projects extends Component {
  render() {
    return (
      <>
        <div className='total-project-page'>
            
            <div className='total-project-container'>
                <div className='total-project-details-header'>
                    <p className='input-label-24 color-secondary'>Projects</p>
                </div>
                <hr />
                <br />
                <div className='projects-sections'>
                    <button className='active-button'><img src={totalprojecticon} /> Total Projects</button>
                    <button className='nonactive-button'><img src={pendingprojecticon} /> Pending Projects</button>
                    <button className='nonactive-button'><img src={assignprojecticon} /> Assign Projects</button>
                </div>

                <div className='total-project-main-list'>
                <div className='total-project-header-list'>
                    <p className='input-label-15-bold color-white'>Employee Name</p>
                    <p className='input-label-15-bold color-white'>Reg. Date</p>
                    <p className='input-label-15-bold color-white'>See Details</p>
                </div>

                <div className='total-project-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Chintan Makwana</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>

                <div className='total-project-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Chintan Makwana</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>

                <div className='total-project-main-list'>
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
