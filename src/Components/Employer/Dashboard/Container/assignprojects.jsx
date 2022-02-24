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

                <div className='assignments-container'>
                    <div className='assignments-header'>
                        <p className='input-label-24-bold'>Projects Details</p>
                    </div>
                    
                    <div className='assignments-sections'>
                      <div className='assignment-forms-container'>

                      <div className='assignments-form'>
                          <p className='input-label-24-bold color-secondary'>Title :</p>
                          <input type="text" className='inputboxs addemp-assign'/>
                      </div>
                      <div className='assignments-form'>
                          <p className='input-label-24-bold color-secondary'>Description :</p>
                          <textarea type="text" className='inputboxs addemp-assign-1'/>
                      </div>
                      <div className='assignments-form'>
                          <p className='input-label-24-bold color-secondary'>Deadline :</p>
                          <input type="text" className='inputboxs addemp-assign'/>
                      </div>
                      
                      <div className='assignments-submitbtn'>
                      <button className='primarybtn'>Submit</button>
                      </div>
                      </div>

                      <hr />
                      <div className='select-employee-assignment'>
                        <p className='input-label-30 color-secondary'>
                          Select Employee
                        </p>
                        <label className='checkbox-assign-employee color-secondary input-label-20'><input type='checkbox' /> Chintan Makwana</label>
                        <label className='checkbox-assign-employee color-secondary input-label-20'><input type='checkbox' /> Prateek Kuber</label>
                        <label className='checkbox-assign-employee color-secondary input-label-20'><input type='checkbox' /> Govind Kshirsagar</label>
                        <label className='checkbox-assign-employee color-secondary input-label-20'><input type='checkbox' /> Chintan Makwana</label>
                         
                      </div>

                    </div>
                </div>
               
            </div>
            
        </div>  
      </>
    )
  }
}
