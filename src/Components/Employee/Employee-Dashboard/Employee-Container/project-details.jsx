import React, { Component } from 'react';
import '../../scss/_project-details.scss';

export default class Project_details extends Component {
  render() {
    return (
     <>
        <div className='project-details-container'>
            <div className='project-details-section'>
                <div className='project-details-headers'>
                <p className='header-36 color-secondary'> Projects</p>
                </div>
                <hr />
                
                <div className='project-details-info'>
                        <div className='project-details-inside-header'>
                            <p className='input-label-24-bold'>Profile Details</p>
                        </div>
                        <div className='project-details-inside-info'>
                        <ul>
                    
                            <li className='input-label-24-bold color-secondary'>Title:</li>
                            <p className='color-secondary input-label-24-bold'>Designing on on application .....</p>
                            <hr />
                        
                            <li className='input-label-24-bold color-secondary'>Description:</li>
                            <p className='color-secondary input-label-24-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                            <hr />
                            
                            <li className='input-label-24-bold color-secondary'>Deadlines:</li>
                            <p className='color-secondary input-label-24-bold'>18-Feb 2022</p>
                            <div className='btn-submission'>
                            <button className='active-button'><a href='/Project-submission'>Submission</a></button>
                            </div> 
                            
                        </ul>
                        </div>
                    
                </div>
            </div>
        </div>
     </>
    )
  }
}
