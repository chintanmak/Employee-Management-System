import React, { Component } from 'react';
import '../../scss/_add-application.scss';


export default class Add_application extends Component {
  render() {
    return (
        <>
             <div className='add-application-container'>
            <div className='add-application-section'>
                <div className='add-application-header'>
                <p className='header-36 color-secondary'>Add New Application</p>
                </div>
                <hr />
                <div className='add-application-info-container'>
                <div className='add-application-headers'>
                        <p className='input-label-24-bold'>Application Details</p>
                    </div>
                    
                <div className='add-application-sections'>
                      <div className='add-application-forms-container'>

                      <div className='add-application-form'>
                          <p className='input-label-24-bold color-secondary'>Title :</p>
                          <input type="text" className='inputboxs addemp-assign'/>
                      </div>
                      <div className='add-application-form'>
                          <p className='input-label-24-bold color-secondary'>Description :</p>
                          <textarea type="text" className='inputboxs addemp-assign-1'/>
                      </div>
                      
                      <div className='add-application-submitbtn'>
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
