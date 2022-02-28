import React, { Component } from 'react';
import '../../scss/_project-submission.scss';

export default class Project_Submission extends Component {
  render() {
    return (
      <>
          <div className='project-submission-container'>
            <div className='project-submission-section'>
                <div className='project-submission-header'>
                <p className='header-36 color-secondary'> Projects</p>
                </div>
                <hr />
                <div className='project-submission-info-container'>
                <div className='project-header'>
                        <p className='input-label-24-bold'>Projects Details</p>
                    </div>
                    
                <div className='project-submission-sections'>
                      <div className='project-forms-container'>

                      <div className='project-form'>
                          <p className='input-label-24-bold color-secondary'>Title :</p>
                          <input type="text" className='inputboxs addemp-assign'/>
                      </div>
                      <div className='project-form'>
                          <p className='input-label-24-bold color-secondary'>Description :</p>
                          <textarea type="text" className='inputboxs addemp-assign-1'/>
                      </div>
                      <div className='project-form'>
                          <p className='input-label-24-bold color-secondary'>File :</p>
                          <input type="text" className='inputboxs addemp-assign'/>
                      </div>
                      
                      <div className='project-submitbtn'>
                      <button className='primarybtn'>Submit</button>
                      </div>
                      </div>

                    </div>
                </div>
            </div>
          </div>
      </>
    )
  }
}
