import React, { Component } from 'react';
import '../../scss/_project-view-details.scss';

import totalprojecticon from '../../../Assets/svgs/totalproject.svg';
import pendingprojecticon from '../../../Assets/svgs/pendingproject.svg';
import assignprojecticon from '../../../Assets/svgs/assignproject.svg';

export default class Project_view_details extends Component {
  render() {
    return (
      
<>
    
      <div className='project-view-details-page'>
      <div className='project-view-details-container'>

                <div className='project-view-details-header'>
                    <p className='header-36 color-secondary'>Projects</p>
                </div>
                <hr />
                <div className='projects-sections'>
                    <button className='nonactive-button'><img src={totalprojecticon} /> Total Projects</button>
                    <button className='active-button'><img src={pendingprojecticon} /> Pending Projects</button>
                    <button className='nonactive-button'><img src={assignprojecticon} /> Assign Projects</button>
                </div>

                <div className='project-view-details'>
                    <div className='project-view-details-headers'>
                        <p className='input-label-24-bold color-secondary'>Title here</p>
                    </div>
                    <div className='project-view-details-content'>
                    <p className='input-label-24 color-secondary'>Description: ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        <br />
                        <div className='project-view-details-file'>
                            <p className='input-label-24 color-secondary'>File: hellofile.pdf</p>
                            <button className='active-button'>View</button>
                        </div>
                    </div>
                    <div className='project-view-details-decision'>
                        <button className='active-button'>Accept</button>
                        <button className='nonactive-button border'>Reject</button>
                    </div>
      </div>
      </div>
      </div>
</>

    )
  }
}
