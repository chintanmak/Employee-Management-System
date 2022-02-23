import React, { Component } from 'react';
import '../../scss/_employee-application.scss';
import applicationicon from '../../../Assets/svgs/application.svg';

export default class Employee_application extends Component {
  render() {
    return (
      <>
        <div className='employee-application-container'>
            <div className='employee-application-section'>
                <div className='employee-application-header'>
                    <p className='input-label-24-bold color-secondary'><img src={applicationicon} /> Employee Application</p>
                </div>

                <div className='employee-application-list-section'>
                    <div className='employee-application-list-header'>
                    <p className='input-label-24-bold color-white'>Employee Name</p>
                    <p className='input-label-24-bold color-white'>submitted On</p>
                    <p className='input-label-24-bold color-white'>See Details</p>    
                    </div>

                    <div className='employee-application-main-list'>
                    <p className='input-label-24-bold color-lightgreen'>Chintan Makwana</p>
                    <p className='input-label-24-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-24-bold color-lightgreen'>View</p>
                    </div>

                    <div className='employee-application-main-list'>
                    <p className='input-label-24-bold color-lightgreen'>Prateek kuber</p>
                    <p className='input-label-24-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-24-bold color-lightgreen'>View</p>
                    </div>

                    <div className='employee-application-main-list'>
                    <p className='input-label-24-bold color-lightgreen'>Govind kshirsagar</p>
                    <p className='input-label-24-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-24-bold color-lightgreen'>View</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
