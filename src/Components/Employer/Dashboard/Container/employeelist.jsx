import React, { Component } from 'react';
import '../../scss/_employeelist.scss';

import employeelisticon from '../../../Assets/svgs/employeelist.svg';
import addemployeeicon from '../../../Assets/svgs/addemployee.svg';

export default class Employee_list extends Component {
  render() {
    return (
      <>
        <div className='employeelist-page'>
            <div className='employeelist-container'>
                <div className='employeelist-header-section'>
                <p className='input-label-15-bold color-lightgreen'><img src={employeelisticon} /> Employee List</p>
                <button className='nonactive-button'> <img src={addemployeeicon} /> Add New Employee </button>
                </div>

                <div className='employee-list-section'>
                <div className='employee-header-list'>
                    <p className='input-label-15-bold color-white'>Employee Name</p>
                    <p className='input-label-15-bold color-white'>Employee ID</p>
                    <p className='input-label-15-bold color-white'>Reg. Date</p>
                    <p className='input-label-15-bold color-white'>See Details</p>
                </div>

                <div className='employee-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Chintan Makwana</p>
                    <p className='input-label-15-bold color-lightgreen'>xxx xxx xxx</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>

                <div className='employee-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Prateek kuber</p>
                    <p className='input-label-15-bold color-lightgreen'>xxx xxx xxx</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>

                <div className='employee-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Govind kshirsagar</p>
                    <p className='input-label-15-bold color-lightgreen'>xxx xxx xxx</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>

                <div className='employee-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Chintan Makwana</p>
                    <p className='input-label-15-bold color-lightgreen'>xxx xxx xxx</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>

                <div className='employee-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Prateek kuber</p>
                    <p className='input-label-15-bold color-lightgreen'>xxx xxx xxx</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>

                <div className='employee-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Govind kshirsagar</p>
                    <p className='input-label-15-bold color-lightgreen'>xxx xxx xxx</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>

                <div className='employee-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Chintan Makwana</p>
                    <p className='input-label-15-bold color-lightgreen'>xxx xxx xxx</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>

                <div className='employee-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Prateek kuber</p>
                    <p className='input-label-15-bold color-lightgreen'>xxx xxx xxx</p>
                    <p className='input-label-15-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-15-bold color-lightgreen'>View</p>
                </div>

                <div className='employee-main-list'>
                    <p className='input-label-15-bold color-lightgreen'>Govind kshirsagar</p>
                    <p className='input-label-15-bold color-lightgreen'>xxx xxx xxx</p>
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
