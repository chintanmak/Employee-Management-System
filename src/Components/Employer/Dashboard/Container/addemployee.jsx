import React, { Component } from 'react';
import '../../scss/_addemployee.scss';

export default class Add_employee extends Component {
  render() {
    return (
      <>
        <div className='add-employee-container'>
            <div className='add-employee-section'>
                <div className='addemployee-header'>
                    <p className='input-label-24-bold color-secondary'>Add New Employee</p>
                    <hr />
                </div>
                <div className='add-employee-details'>
                    <div className='add-employee-header'>
                        <p className='input-label-24-bold'>Registration Form</p>
                    </div>
                    <div className='add-employee-form'>
                        <p className='input-label-24-bold color-secondary'>Name :</p>
                        <input type="text" className='inputboxs addemp-input'/>
                    </div>
                    <div className='add-employee-form'>
                        <p className='input-label-24-bold color-secondary'>Email :</p>
                        <input type="text" className='inputboxs addemp-input'/>
                    </div>
                    <div className='add-employee-form'>
                        <p className='input-label-24-bold color-secondary'>Role :</p>
                        <input type="text" className='inputboxs addemp-input'/>
                    </div>
                    <div className='add-employee-form'>
                        <p className='input-label-24-bold color-secondary'>Phone :</p>
                        <input type="text" className='inputboxs addemp-input'/>
                    </div>
                    <div className='add-employee-submitbtn'>
                     <button className='primarybtn'>Submit</button>
                    </div>
                </div>

            </div>
        </div>
      </>
    )
  }
}
