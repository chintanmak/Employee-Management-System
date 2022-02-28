import React, { Component } from 'react';
import '../../scss/_application-list.scss';

import employeelisticon from '../../../Assets/svgs/employeelist.svg';
import addemployeeicon from '../../../Assets/svgs/addemployee.svg';

export default class Application_list extends Component {
  render() {
    return (
        <>
             <div className='application-list-container'>
                <div className='aaplication-list-section'>
                <div className='application-list-header'>
                <p className='input-label-24-bold color-lightgreen'><img src={employeelisticon} /> Application List</p>
                <button className='nonactive-button'> <img src={addemployeeicon} /> Add New Application </button>
                </div>

                <div className='application-list-section'>
                <div className='application-header-list'>
                    <p className='input-label-24-bold color-white'>Title</p>
                    <p className='input-label-24-bold color-white'>Employee ID</p>
                    <p className='input-label-24-bold color-white'>Reg. Date</p>
                    <p className='input-label-24-bold color-white'>See Details</p>
                </div>

                <div className='application-main-list'>
                    <p className='input-label-24-bold color-lightgreen'>Chintan Makwana</p>
                    <p className='input-label-24-bold color-lightgreen'>xxx xxx xxx</p>
                    <p className='input-label-24-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-24-bold color-lightgreen'>View</p>
                </div>

                <div className='application-main-list'>
                    <p className='input-label-24-bold color-lightgreen'>Prateek kuber</p>
                    <p className='input-label-24-bold color-lightgreen'>xxx xxx xxx</p>
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
