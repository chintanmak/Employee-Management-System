import React, { Component } from 'react';
import '../../scss/_assignprojects.scss';

import totalprojecticon from '../../../Assets/svgs/totalproject.svg';
import pendingprojecticon from '../../../Assets/svgs/pendingproject.svg';
import assignprojecticon from '../../../Assets/svgs/assignproject.svg';

export default class Assign_projects extends Component {
  render() {
    return (
      <>
          <div className='assign-project-page'>
            
            <div className='assign-project-container'>
                <div className='assign-project-details-header'>
                    <p className='input-label-24 color-secondary'>Projects</p>
                </div>
                <hr />
                <div className='assign-sections'>
                    <button className='nonactive-button'><img src={totalprojecticon} /> Total Projects</button>
                    <button className='nonactive-button'><img src={pendingprojecticon} /> Pending Projects</button>
                    <button className='active-button'><img src={assignprojecticon} /> Assign Projects</button>
                </div>

               
            </div>
            
        </div>  
      </>
    )
  }
}
